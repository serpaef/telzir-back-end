import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.routes();
  }

  private routes(): void {
    this.app.use(routes)
  }
 
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

export default App;
