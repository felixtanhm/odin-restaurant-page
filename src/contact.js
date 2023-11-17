import { getMain } from "./init";

const createContact = () => {
  const menu = document.createElement("div");
  menu.setAttribute("id", "contact");
  return menu;
};

const loadContact = () => {
  const main = getMain();
  main.appendChild(createContact());
};

export default loadContact;
