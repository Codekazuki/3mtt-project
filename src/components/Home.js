import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");

  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/codekazuki/repos?page=${currentPage}&per_page=10`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0 || data.length < 10) {
          setShowViewMore("End of Repos");
        } else {
          setUser([...user, ...data]);
          setShowViewMore("View More");
        }
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const userElements = user.map((userElement) => {
    return (
      <div className='card' key={userElement.id}>
        <h2 className='name'>{userElement.name}</h2>
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
      <button className='view-more' onClick={viewMore}>
        {showViewMore}
      </button>
    </>
  );
}

export default Home;
