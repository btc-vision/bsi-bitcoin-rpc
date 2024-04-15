import { ConfigManager, IConfig } from '@btc-vision/bsi-common';
import { BtcIndexerConfig } from './BtcIndexerConfig.js';
import { IBtcIndexerConfig } from './interfaces/IBtcIndexerConfig.js';

export class BtcIndexerConfigManager extends ConfigManager<IConfig<IBtcIndexerConfig>> {
    private defaultConfig: Partial<IBtcIndexerConfig> = {};

    constructor(fullFileName: string) {
        super(fullFileName);
    }

    public override getConfigs(): BtcIndexerConfig {
        return new BtcIndexerConfig(this.config);
    }

    protected getDefaultConfig(): IConfig<IBtcIndexerConfig> {
        const config: IConfig<IBtcIndexerConfig> = {
            ...super.getDefaultConfig(),
            ...this.defaultConfig,
        };

        return config;
    }

    protected override verifyConfig(parsedConfig: Partial<IBtcIndexerConfig>): void {
        super.verifyConfig(parsedConfig);
    }

    protected override parsePartialConfig(parsedConfig: Partial<IBtcIndexerConfig>): void {
        this.verifyConfig(parsedConfig);
        super.parsePartialConfig(parsedConfig);

        this.config.BLOCKCHAIN = {
            ...parsedConfig.BLOCKCHAIN,
            ...this.config.BLOCKCHAIN,
        };
    }
}
