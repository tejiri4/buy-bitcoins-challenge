import chai from 'chai';
import EasyGraphQLTester from 'easygraphql-tester';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import priceSchema from '../../schema/priceSchema';
import app from '../../index';
import messages from '../../utils/messages';

// Define the expect assertion
const { expect } = chai;


const tester = new EasyGraphQLTester(priceSchema);

// chai middleware
chai.use(chaiHttp);
chai.use(sinonChai);
chai.should();

export {
  app,
  chai,
  expect,
  sinon,
  messages,
  tester,
};
