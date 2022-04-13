import express from 'express';
import 'dotenv/config'

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
});
