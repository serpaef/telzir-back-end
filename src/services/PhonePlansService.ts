import PhonePlans from '../database/models/PhonePlan';

class PhonePlansService {
  static async getAll() {
    // I thought it would be better to let the exception be thrown, and handle it in the controller
    const plans: PhonePlans[] = await PhonePlans.findAll();
    return plans;
  }
}

export default PhonePlansService;
