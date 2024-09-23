import express from "express";
import cors from "cors";

import { volunteerRouter } from "./routes/volunteer.routes.js";
import { ongRouter } from "./routes/ong.routes.js";
import { opportunityRouter } from "./routes/opportunity.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173', 
            'https://ong-frontend.vercel.app'
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(volunteerRouter);
app.use(ongRouter);
app.use(opportunityRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
