const logoutUser = () => {
  document.cookie = "accessToken=; max-age=0; path=/";
  document.cookie = "refreshToken=; max-age=0; path=/";

  const url = new URL(window.location.href);
  url.pathname = "/";
  url.searchParams.delete("redirect");

  window.history.replaceState({}, "", url.toString());
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export default logoutUser;
