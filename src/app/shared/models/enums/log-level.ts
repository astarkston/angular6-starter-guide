export enum LogLevel {
  Verbose = 5,
  Debug = 4,
  Info = 3,
  Warn = 2,
  Error = 1,
  Silent = 0
}

const _logLevelToString = (val: LogLevel) => {
  let level = '';
  switch (val) {
    case LogLevel.Verbose:
      level = 'Verbose';
      break;
    case LogLevel.Debug:
      level = 'Debug';
      break;
    case LogLevel.Info:
      level = 'Info';
      break;
    case LogLevel.Warn:
      level = 'Warn';
      break;
    case LogLevel.Error:
      level = 'Error';
      break;
    case LogLevel.Silent:
      level = 'Silent';
      break;
  }
  return level;
};

export const LogLevelToString = _logLevelToString;
