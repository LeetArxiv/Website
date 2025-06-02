import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import compression from "compression";
import path from "path";
const app = express();
const router = Router();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.resolve(__dirname, './', 'Pages',)));

router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/", router);

export const handler = serverless(app);
