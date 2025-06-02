import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";

const app = express();
const router = Router();

app.use(bodyParser.json());

router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api/", router);

export const handler = serverless(app);

