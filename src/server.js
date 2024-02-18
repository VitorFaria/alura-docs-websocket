import express from 'express';
import dotenv from 'dotenv';
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
dotenv.config({ path: '../.env'});

const app = express();
const port = process.env.PORT;

const currentPath = url.fileURLToPath(import.meta.url);
const publicFolder = path.join(currentPath, "../..", "public");
app.use(express.static(publicFolder));

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

const io = new Server(httpServer);

export default io;
