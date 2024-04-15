import path from 'path';
import { BtcIndexerConfigManager } from './manager/BtcIndexerConfigLoader';
import { BtcIndexerConfig } from './manager/BtcIndexerConfig';

const configPath = path.join(__dirname, '../../', 'tests/config/btc.unit.test.conf');

const configManager: BtcIndexerConfigManager = new BtcIndexerConfigManager(configPath);
const config: BtcIndexerConfig = configManager.getConfigs();

export const TestConfig: BtcIndexerConfig = config;
