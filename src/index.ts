import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
    res.send('Ok');
})

app.post('/kapier/api/gmail/watch', (req: Request, res: Response) => {
    console.log(`Recieved notification from gmail: `, req.body);
})

app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`);
})
