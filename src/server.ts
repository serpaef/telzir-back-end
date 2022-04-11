import express from 'express';
import 'dotenv/config'

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(3000, () => {
  console.log(`Listening on ${ PORT }`)
});
