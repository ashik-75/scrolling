function Login() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const myParam = urlParams.get("q");
  return <div>Login - {myParam}</div>;
}

export default Login;
