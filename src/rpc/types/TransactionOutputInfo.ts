import { ScriptPubKey } from './BitcoinRawTransaction';

export interface TransactionOutputInfo {
    bestblock: string;
    confirmations: number;
    value: number;
    scriptPubKey: ScriptPubKey;
    coinbase: boolean;
}
