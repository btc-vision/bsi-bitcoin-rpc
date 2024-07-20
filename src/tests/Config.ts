import path from 'path';
import { BtcIndexerConfigManager } from './manager/BtcTestConfigLoader.js';
import { BtcTestConfig } from './manager/BtcTestConfig.js';

const configPath = path.join(__dirname, '../../../', 'src/tests/config/btc.unit.test.conf');

const configManager: BtcIndexerConfigManager = new BtcIndexerConfigManager(configPath);
const config: BtcTestConfig = configManager.getConfigs();

export const TestConfig: BtcTestConfig = config;
