import 'jest';
import { BitcoinRPC } from '../src';
import { Config } from './config/manager/Config';

describe('Test', () => {
    test(``, async () => {
        const bitcoinRPC: BitcoinRPC = new BitcoinRPC();

        await bitcoinRPC.init(Config.BLOCKCHAIN);

        const block = await bitcoinRPC.getBlockInfoWithTransactionData(
            '00000000000000073609057b145ae82252fe48eaf5dbd7abc2f8715d2586e70d',
        );
        if (!block) {
            throw new Error('Block not found');
        }

        console.log(block.tx[0].vin);
    });
});
