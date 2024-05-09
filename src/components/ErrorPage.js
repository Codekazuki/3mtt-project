function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='error-status'>{error.status}</p>
      <p className='error-status-text'>
        <i>{error.statusText}</i>
      </p>
      <p>
        <b>Home page</b>
      </p>
    </div>
  );
}

export default ErrorPage;
