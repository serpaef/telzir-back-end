import Rates from '../database/models/Rates';

class RatesService {
  static async getAll() {
    // I thought it would be better to let the exception be thrown, and handle it in the controller 
    const plans: Rates[] = await Rates.findAll();
    return plans;
  }
}

export default RatesService
