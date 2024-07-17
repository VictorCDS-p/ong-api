import express from "express";
import { volunteerRouter } from "./routes/volunteer.routes.js";
import { ongRouter } from "./routes/ong.routes.js";
import { opportunityRouter } from "./routes/opportunity.routes.js";

const app = express();
const port = 3000;


app.use(express.json());


app.use(volunteerRouter);
app.use(ongRouter);
app.use(opportunityRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
