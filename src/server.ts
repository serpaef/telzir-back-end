import App from './App';
import 'dotenv/config'

const PORT = process.env.PORT || 3001;

const app = new App();

app.start(PORT)
