import config from "@proxtx/config";
import fs from "fs/promises";

let notes = JSON.parse(await fs.readFile("saved.json", "utf8")).liveNotes;
if (!notes) notes = "";
let updateTime = Date.now();

export const auth = (pwd) => {
  return config.pwd == pwd;
};

export const getNotes = (pwd) => {
  if (!auth(pwd)) return;
  //if (Date.now() - updateTime > 1000 * 60 * 60 * 5) notes = "";
  return notes;
};

export const updateNotes = async (pwd, updatedNotes) => {
  if (!auth(pwd)) return;
  notes = updatedNotes;
  let saved = JSON.parse(await fs.readFile("saved.json", "utf8"));
  saved.liveNotes = notes;
  await fs.writeFile("saved.json", JSON.stringify(saved, null, 2));
  updateTime = Date.now();
};

export const save = async (pwd, text) => {
  if (!auth(pwd)) return;
  let saved = JSON.parse(await fs.readFile("saved.json", "utf8"));
  saved.saved.push(text);
  await fs.writeFile("saved.json", JSON.stringify(saved, null, 2));
};

export const getSaved = async (pwd) => {
  if (!auth(pwd)) return;
  let saved = JSON.parse(await fs.readFile("saved.json", "utf8"));
  return saved.saved;
};
