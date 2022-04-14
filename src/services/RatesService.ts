import Rates from '../database/models/Rates';
import IRates from '../interfaces/IRates';

class RatesService {
  static async getAll() {
    // I thought it would be better to let the exception be thrown, and handle it in the controller 
    const plans: IRates[] = await Rates.findAll();
    return plans;
  }
}

export default RatesService
