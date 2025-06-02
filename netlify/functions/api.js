import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import compression from "compression";

const app = express();
const router = Router();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './', 'Pages',)));

router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api/", router);

export const handler = serverless(app);

