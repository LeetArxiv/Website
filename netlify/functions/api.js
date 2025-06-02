import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import compression from "compression";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
const app = express();
const router = Router();

app.use(bodyParser.json());
app.use(compression());

router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/canvas", (req, res) => res.sendFile('CanvasPage/index.html',{ root: __dirname }));
app.use("/", router);

export const handler = serverless(app);
