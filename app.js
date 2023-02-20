import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import indexRouter from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", indexRouter);

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

export default app;
