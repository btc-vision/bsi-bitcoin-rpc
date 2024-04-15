import { ConfigBase, IConfig } from '@btc-vision/bsi-common';

import '../utils/Globals.js';
import { IBtcIndexerConfig } from './interfaces/IBtcIndexerConfig';

export class BtcIndexerConfig extends ConfigBase<IConfig<IBtcIndexerConfig>> {
    constructor(config: IConfig<IBtcIndexerConfig>) {
        super(config);
    }
}
