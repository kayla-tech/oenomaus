import chai, {
  expect,
  assert,
  Assertion,
  AssertionError,
} from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

global.expect = expect;
global.assert = assert;
global.AssertionError = AssertionError;
global.Assertion = Assertion;
