import express from "express";
import { openai } from "../app.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${req.body.userInput}`,
    max_tokens: 1000,
    temperature: 0,
  });
  if (response.data) {
    if (response.data.choices) {
      res.send(response.data.choices[0].text);
    }
  }
});

export default router;
