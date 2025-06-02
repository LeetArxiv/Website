import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import compression from "compression";
const app = express();
const router = Router();
const __dirname = import.meta.dirname;

app.use(bodyParser.json());
app.use(compression());

router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/canvas", (req, res) => res.sendFile('CanvasPage/index.html',{ root: __dirname }));
app.use("/", router);

export const handler = serverless(app);
