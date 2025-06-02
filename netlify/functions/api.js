import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import compression from "compression";
import pageRouter from "../../Routes/pages";

const app = express();
const pageRouter = pageRouter();
app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './', 'Pages',)));


app.use("/", pageRouter);

app.use((req, res, next) => 
{
    res.status(404).send('404 - Not Found');
});
export const handler = serverless(app);

