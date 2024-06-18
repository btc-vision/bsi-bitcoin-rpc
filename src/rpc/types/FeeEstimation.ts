export enum FeeEstimation {
    ECONOMICAL = 'ECONOMICAL',
    CONSERVATIVE = 'CONSERVATIVE',
    UNSET = 'UNSET',
}

export interface SmartFeeEstimation {
    readonly blocks: number;

    readonly feeRate?: number;
    readonly errors?: string[];
}
