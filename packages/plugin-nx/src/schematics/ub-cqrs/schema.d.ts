export interface UBCQRSSchema {
  type: 'command' | 'query' | 'event';
  name: string;
  project: string;
  unitTestRunner: 'jest' | 'none';
  directory?: string;
  path?: string;
  group?: string;
  flat: boolean;
  spec?: boolean;
}