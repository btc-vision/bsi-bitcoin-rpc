import { BitcoinVerbosity } from './BitcoinVerbosity.js';

export interface RawMempoolTransaction {
    readonly vsize: number;
    readonly weight: number;
    readonly time: number;
    readonly height: number;
    readonly descendantcount: number;
    readonly descendantsize: number;
    readonly ancestorcount: number;
    readonly ancestorsize: number;
    readonly wtxid: string;
    readonly fees: {
        readonly base: number;
        readonly modified: number;
        readonly ancestor: number;
        readonly descendant: number;
    };
    readonly depends: string[];
    readonly spentby: string[];
    readonly 'bip125-replaceable': boolean;
    readonly unbroadcast: boolean;
}

export interface RawMempoolTransactions {
    readonly [transactionId: string]: RawMempoolTransaction;
}

export type RawMempool<V extends BitcoinVerbosity> = V extends BitcoinVerbosity.RAW
    ? string[]
    : RawMempoolTransactions;
