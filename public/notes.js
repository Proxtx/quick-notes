import config from "@proxtx/config";

let notes = "";
let updateTime = Date.now();

export const auth = (pwd) => {
  return config.pwd == pwd;
};

export const getNotes = (pwd) => {
  if (!auth(pwd)) return;
  if (Date.now() - updateTime > 1000 * 60 * 60 * 5) notes = "";
  return notes;
};

export const updateNotes = (pwd, updatedNotes) => {
  if (!auth(pwd)) return;
  notes = updatedNotes;
  updateTime = Date.now();
};
