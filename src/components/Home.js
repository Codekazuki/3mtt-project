import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState([]);

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/codekazuki/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const userElements = user.map((userElement) => {
    return (
      <div className='repo-card' key={userElement.id}>
        <h2 className='repo-name'>{userElement.name}</h2>
        <p className='language'>
          Langauge:{" "}
          {userElement.language === null ? "none" : userElement.language}
        </p>
        <p className='date'>Start date & time: {userElement.created_at}</p>
        <p className='visibility'>Visibility: {userElement.visibility}</p>
      </div>
    );
  });

  return (
    <>
      <section className='repo-container'>{userElements}</section>
    </>
  );
}

export default Home;
