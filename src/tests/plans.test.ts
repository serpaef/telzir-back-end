import chai from 'chai';
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';

import { Response } from 'superagent';

import App from '../App';
import IPhonePlan from '../interfaces/IPhonePlan';
import PhonePlansService from '../services/PhonePlansService';
import { plans } from './mocks/plans';

chai.use(chaiHttp);

const { expect } = chai;
const { app } = new App();

describe('Route /plans', () => {
  describe('Request GET /plans', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      Sinon.stub(PhonePlansService, 'getAll').resolves(plans as IPhonePlan[]);
    });

    after(() => {
      (PhonePlansService.getAll as Sinon.SinonStub).restore();
    });

    it('Should return an array of plans', async () => {
      chaiHttpResponse = await chai.request(app).get('/plans');

      expect(chaiHttpResponse.body).to.be.have.a('array');
      expect(chaiHttpResponse.body).to.be.have.length(3);
    });

    it('Should return an array of plans with the correct properties', async () => {
      chaiHttpResponse = await chai.request(app).get('/plans');

      expect(chaiHttpResponse.body[0]).to.be.have.a.property('plan');
      expect(chaiHttpResponse.body[0]).to.be.have.a.property('id');
      expect(chaiHttpResponse.body[0]).to.be.have.a.property('minutes');
    });

    it('Should return an response with status 200', async () => {
      chaiHttpResponse = await chai.request(app).get('/plans');

      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  });
});
