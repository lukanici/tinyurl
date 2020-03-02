import express, { Request, Response } from "express";
import connectDB from './db';
import index from './routes/index';
import urls from './routes/urls';
import domains from './routes/domains';
import path from 'path';
import error from './middleware/error';


const app = express();
const port: number = 3000;

app.use(express.json());

// Connect to a database
connectDB();

// Serving Angular app static files
app.use(express.static(path.join(__dirname, '/../client/dist/TinyURL')));

// Routes
app.use('/', index);
app.use('/api/urls', urls);
app.use('/api/domains', domains);

// Serving Angular app
app.get('*', (req: Request, res: Response) => {
  throw new Error('greska');
  res.sendFile(path.join(__dirname, '/../client/dist/TinyURL/index.html'));
});

// Handling 500s
app.use(error);

// Start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});