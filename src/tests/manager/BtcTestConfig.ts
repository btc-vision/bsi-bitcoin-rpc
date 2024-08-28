import { ConfigBase, IConfig } from '@btc-vision/bsi-common';
import { IBtcTestConfig } from './interfaces/IBtcTestConfig.js';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { RPCConfig } from '../../rpc/interfaces/RPCConfig.js';

if (!__filename && !globalThis['__filename'] && !process.env.TS_JEST) {
    const __filename = fileURLToPath(import.meta.url);
    global.__filename = __filename;

    if (!globalThis['__dirname']) {
        global.__dirname = path.dirname(__filename);
    }
}

export class BtcTestConfig extends ConfigBase<IConfig<IBtcTestConfig>> {
    public BLOCKCHAIN: RPCConfig;

    constructor(config: IConfig<IBtcTestConfig>) {
        super(config);

        this.BLOCKCHAIN = config.BLOCKCHAIN;
    }
}
