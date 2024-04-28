import { BitcoinVerbosity } from './BitcoinVerbosity.js';
import { VIn, VOut } from './BlockData.js';

export interface BitcoinRawTransactionParams {
    txId: string;
    blockHash?: string;
    verbose?: BitcoinVerbosity;
}

export interface ScriptSig {
    asm: string;
    hex: string;
}

export interface ScriptPubKey {
    asm?: string;
    hex: string;
    reqSigs?: number;
    type?: string; // Consider enum if there are known, limited values for type
    addresses?: string[];
    address?: string; // Optional as it might not be present for unconfirmed transactions
}

export interface TransactionDetail {
    in_active_chain?: boolean; // Optional as it only appears with "blockhash" argument
    hex: string;
    txid: string;
    hash: string;
    size: number;
    vsize: number;
    weight: number;
    version: number;
    locktime: number;
    vin: VIn[];
    vout: VOut[];
    blockhash?: string; // Optional as it might not be present for unconfirmed transactions
    confirmations?: number; // Optional for similar reason as blockhash
    blocktime?: number; // Optional for similar reason as blockhash
    time?: number; // Optional for similar reason as blockhash
}

export type RawTransaction<V extends BitcoinVerbosity> = V extends BitcoinVerbosity.RAW
    ? string
    : TransactionDetail;
