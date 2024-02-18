import io from "../server.js";

io.on("connection", (socket) => {
  console.log("Um novo cliente se conectou. ID:", socket.id);

  socket.on('selectedDocument', (documentName) => {
    socket.join(documentName);
  })

  socket.on("textEditor", ({ textEditor, documentName }) => {
    socket.to(documentName).emit("textEditorUsers", textEditor);
  })
});