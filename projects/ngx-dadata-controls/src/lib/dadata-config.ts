import { Locations } from './models/locations';

export interface DadataConfig {
    apiKey: string;
    type?: DadataType;
    delay?: number;
    limit?: number;
    width?: 'auto' | string;
    minWidth?: '0' | string;
    partyAddress?: 'city' | 'full';
    locations?: Locations[];
    restrict_value?: boolean;
}

export enum DadataType {
    fio = 'fio',
    address = 'address',
    party = 'party',
    bank = 'bank',
    email = 'email'
}

export const DadataConfigDefault: DadataConfig = {
    apiKey: '',
    type: DadataType.address,
    delay: 500,
    limit: 10,
    width: 'auto',
    minWidth: '0',
    partyAddress: 'city',
    locations: null,
};

