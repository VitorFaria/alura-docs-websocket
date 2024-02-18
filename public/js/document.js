import { emitFromTextEditor, getSelectedDocumentName } from "./client-socket.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get('name');

const textEditor = document.getElementById('text-editor');
const documentTitle = document.getElementById('document-title');

documentTitle.textContent = documentName || 'Documento sem título';

getSelectedDocumentName(documentName);

textEditor.addEventListener('keyup', () => {
  emitFromTextEditor({
    textEditor: textEditor.value, 
    documentName
  });
});

function updateTextEditorOnScreen(value) {
  textEditor.value = value;
}

export { updateTextEditorOnScreen }