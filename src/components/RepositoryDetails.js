import { useState, useEffect } from "react";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [branch, setBranch] = useState({});
  const [deployment, setDeployment] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/codekazuki/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/codekazuki/${id}/branches`)
      .then((response) => response.json())
      .then((data) => {
        setBranch(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/codekazuki/${id}/deployments`)
      .then((response) => response.json())
      .then((data) => {
        setDeployment(data);
      });
  }, []);

  return (
    <div id='repodetail'>
      <div className='card'>
        <h2 className='name'>{details.name}</h2>
        <div className='repo-mini-details'>
          <p>Branches: {branch.length}</p>
        </div>
        <p>
          Main Language: {details.language === null ? "none" : details.language}
        </p>
        <p>
          Live site:{" "}
          {deployment.length === 0 ? (
            `none`
          ) : (
            <a href={`https://codekazuki.github.io/${details.name}`}>
              mbonamensa.github.io/{details.name}
            </a>
          )}
        </p>
        <p>
          <a href={`https://github.com/${details.full_name}`}>View on Github</a>
        </p>
      </div>
    </div>
  );
}

export default RepoDetails;
