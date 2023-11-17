import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Druggists";
  header.appendChild(title);
  header.appendChild(createNav());
  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    setBtnActive(e.target);
    loadHome();
  });
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    setBtnActive(e.target);
    loadMenu();
  });
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    setBtnActive(e.target);
    loadContact();
  });
  nav.appendChild(contactBtn);

  return nav;
};

const createMain = () => {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
};

const getMain = () => {
  return document.getElementById("main");
};

const setBtnActive = (targetBtn) => {
  const btns = document.querySelectorAll(".nav-btn");
  getMain().textContent = "";
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  targetBtn.classList.add("active");
};

const initWebsite = () => {
  console.log("hi initwebsite");
  const body = document.getElementById("content");
  body.appendChild(createHeader());
  body.appendChild(createMain());
  loadHome();
};

export { initWebsite, getMain };
