import loadHome from "./home";

const createHeader = () => {
  const header = document.createElement("header");
  header.appendChild(createNav());
  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
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

const initWebsite = () => {
  console.log("hi initwebsite");
  const body = document.getElementById("content");
  body.appendChild(createHeader());
  body.appendChild(createMain());
  loadHome();
};

export { initWebsite, getMain };
