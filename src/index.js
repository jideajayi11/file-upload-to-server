import express from 'express';
import 'dotenv/config';
import { env } from 'process';
import cors from 'cors';
import routes from './routes';

const port = env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/', (req, res) => {
  res.send('goto "POST /upload" to upload your files')
});
app.use('/', routes);
app.use('/*', (req, res) => {
  return res.send("Not available");
});
