import chai from 'chai';
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';

import { Response } from 'superagent';

import App from '../App';
import IRates from '../interfaces/IRates';
import RatesService from '../services/RatesService';
import { rates } from './mocks/rates';

chai.use(chaiHttp);

const { expect } = chai;
const { app } = new App();

describe('Route /rates', () => {
  describe('Request GET /rates', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      Sinon.stub(RatesService, 'getAll').resolves(rates as IRates[]);
    });

    after(() => {
      (RatesService.getAll as Sinon.SinonStub).restore();
    });

    it('Should return an array of rates', async () => {
      chaiHttpResponse = await chai.request(app).get('/rates');

      expect(chaiHttpResponse.body).to.be.have.a('array');
      expect(chaiHttpResponse.body).to.be.have.length(6);
    });

    it('Should return an array of rates with the correct properties', async () => {
      chaiHttpResponse = await chai.request(app).get('/rates');

      expect(chaiHttpResponse.body[0]).to.be.have.a.property('origin');
      expect(chaiHttpResponse.body[0]).to.be.have.a.property('id');
      expect(chaiHttpResponse.body[0]).to.be.have.a.property('destination');
      expect(chaiHttpResponse.body[0]).to.be.have.a.property('pricePerMinute');
    });

    it('Should return an response with status 200', async () => {
      chaiHttpResponse = await chai.request(app).get('/rates');

      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  });
});
