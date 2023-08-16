import express from 'express';
import cors from 'cors';
import { helloRouter } from './routes/hello.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', helloRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
