import express from 'express';

import { helloWord } from './routes';

const app = express();
const PORT = 3333;

app.get('/', helloWord);

app.listen(PORT, () => {
  console.log(`Server Running at Port: ${PORT}`);
});
