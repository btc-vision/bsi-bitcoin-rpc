import { ConfigManager, IConfig } from '@btc-vision/bsi-common';
import { BtcTestConfig } from './BtcTestConfig.js';
import { IBtcTestConfig } from './interfaces/IBtcTestConfig.js';

export class BtcIndexerConfigManager extends ConfigManager<IConfig<IBtcTestConfig>> {
    private defaultConfig: Partial<IBtcTestConfig> = {};

    constructor(fullFileName: string) {
        super(fullFileName);
    }

    public override getConfigs(): BtcTestConfig {
        return new BtcTestConfig(this.config);
    }

    protected getDefaultConfig(): IConfig<IBtcTestConfig> {
        const config: IConfig<IBtcTestConfig> = {
            ...super.getDefaultConfig(),
            ...this.defaultConfig,
        };

        return config;
    }

    protected override verifyConfig(parsedConfig: Partial<IBtcTestConfig>): void {
        super.verifyConfig(parsedConfig);
    }

    protected override parsePartialConfig(parsedConfig: Partial<IBtcTestConfig>): void {
        this.verifyConfig(parsedConfig);
        super.parsePartialConfig(parsedConfig);

        this.config.BLOCKCHAIN = {
            ...parsedConfig.BLOCKCHAIN,
            ...this.config.BLOCKCHAIN,
        };
    }
}
