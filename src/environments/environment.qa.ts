import { EnvironmentTypes } from './environment-types';
import { LogLevel } from '@shared/models/enums';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    environmentType: EnvironmentTypes.QA,
    logLevel: LogLevel.Debug
};
