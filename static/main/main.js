const notes = await framework.load("notes.js");
while (!(await notes.auth(cookie.pwd))) cookie.pwd = prompt("pwd");
const mainEditArea = document.getElementById("mainEditArea");
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  mainEditArea.value = "";
});

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", async () => {
  await notes.save(cookie.pwd, mainEditArea.value);
  alert("saved");
});

mainEditArea.value = await notes.getNotes(cookie.pwd);

let latestValue = mainEditArea.value;

(async () => {
  while (true) {
    if (latestValue != mainEditArea.value)
      await notes.updateNotes(cookie.pwd, mainEditArea.value);
    latestValue = mainEditArea.value;
    await new Promise((r) => setTimeout(r, 1000));
  }
})();
