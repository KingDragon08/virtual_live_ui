import { Mint } from 'mint-filter';
import { sensitives } from './sensitive/keyword';

export const mint = new Mint(sensitives);

export default mint;