import express, { Request, Response } from "express";
import { MergeRouterPDF } from "./routes/mergeRoutes";
import dotenv from "dotenv";
import { SplitRouterPDF } from "./routes/splitRouter";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use("/api/", MergeRouterPDF);
app.use("/api/", SplitRouterPDF);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
