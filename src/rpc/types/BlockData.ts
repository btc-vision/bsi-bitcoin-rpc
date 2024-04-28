import { ScriptPubKey, ScriptSig } from './BitcoinRawTransaction.js';

export interface VIn {
    txid: string;
    vout: number;
    scriptSig: ScriptSig;
    sequence: number;
    txinwitness?: string[];
    coinbase?: string;
}

export interface VOut {
    value: number;
    n: number;
    scriptPubKey: ScriptPubKey;
}

export interface TransactionData {
    in_active_chain: boolean;
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
    blockhash: string;
    confirmations: number;
    blocktime: number;
    time: number;
}

export interface BlockData {
    hash: string;
    confirmations: number;
    size: number;
    strippedsize: number;
    weight: number;
    height: number;
    version: number;
    versionHex: string;
    merkleroot: string;
    tx: string[];
    time: number;
    mediantime: number;
    nonce: number;
    bits: string;
    difficulty: number;
    chainwork: string;
    nTx: number;
    previousblockhash: string;
    nextblockhash: string;
}

export interface BlockDataWithTransactionData {
    hash: string;
    confirmations: number;
    size: number;
    strippedsize: number;
    weight: number;
    height: number;
    version: number;
    versionHex: string;
    merkleroot: string;
    tx: TransactionData[];
    time: number;
    mediantime: number;
    nonce: number;
    bits: string;
    difficulty: number;
    chainwork: string;
    nTx: number;
    previousblockhash: string;
    nextblockhash: string;
}
