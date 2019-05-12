import {constants} from './constants';

const systemPrinters = printers => ({
  type: constants.SYSTEM_PRINTERS,
  payload: printers,
});

export default systemPrinters;
