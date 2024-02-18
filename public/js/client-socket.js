import { updateTextEditorOnScreen } from "./document.js";

const socket = io();

function getSelectedDocumentName(documentName) {
  socket.emit('selectedDocument', documentName);
}

function emitFromTextEditor(data) {
  socket.emit("textEditor", data)
}

socket.on("textEditorUsers", (value) => {
  updateTextEditorOnScreen(value)
});

export { emitFromTextEditor, getSelectedDocumentName }