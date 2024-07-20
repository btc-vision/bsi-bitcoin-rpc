import { BitcoinRPC } from '../rpc/BitcoinRPC.js';
import { TestConfig } from './Config.js';

const bitcoinRPC: BitcoinRPC = new BitcoinRPC();

(async () => {
    await bitcoinRPC.init(TestConfig.BLOCKCHAIN);

    const block = await bitcoinRPC.getBlockInfoWithTransactionData(
        '2e7c0b196cc00a05c1bc918d20a387fc2ea3c11250e2185b810781c27f76db1a',
    );

    if (!block) {
        bitcoinRPC.destroy();
        throw new Error('Block not found');
    }

    console.log(block);

    bitcoinRPC.destroy();
})();
