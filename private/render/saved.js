import { getSaved } from "../../public/notes.js";

export const server = async (document, options) => {
  let saved = await getSaved(options.req.cookies.pwd);
  saved.reverse();
  const mainContent = document.getElementById("mainContent");
  for (let text of saved) {
    mainContent.appendChild(createSaved(document, text));
  }
};

const createSaved = (document, text) => {
  let elem = document.createElement("m-card");
  elem.setAttribute("wave", "true");
  elem.innerText = text;
  return elem;
};
