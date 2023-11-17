import { getMain } from "./init";

const createHome = () => {
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  return home;
};

const loadHome = () => {
  const main = getMain();
  main.appendChild(createHome());
};

export default loadHome;
