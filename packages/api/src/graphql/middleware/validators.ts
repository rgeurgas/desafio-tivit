import { join } from 'path';
import { defaultsDeep } from 'lodash';
import { loadFilesSync } from '@graphql-tools/load-files';

function getValidators() {
  const validators = loadFilesSync(
    join(__dirname, '..', 'modules', '**', '*.validators.*'),
    { extensions: ['js', 'ts'] }
  );
  return defaultsDeep({}, ...validators);
}

export const validatorsMiddleware = getValidators();
