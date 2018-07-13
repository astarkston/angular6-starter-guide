import { EnvironmentTypes } from './environment-types';
import { LogLevel } from '@shared/models/enums';

export const environment = {
    environmentType: EnvironmentTypes.Prod,
    logLevel: LogLevel.Error
};
