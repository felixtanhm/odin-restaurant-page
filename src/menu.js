import { getMain } from "./init";

const createMenu = () => {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  return menu;
};

const loadMenu = () => {
  const main = getMain();
  main.appendChild(createMenu());
};

export default loadMenu;
