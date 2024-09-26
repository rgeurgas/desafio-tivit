import { join } from 'path';

import { shield } from 'graphql-shield';
import { loadFilesSync } from '@graphql-tools/load-files';
import { defaultsDeep } from 'lodash';
import createError from 'http-errors';

import { isAuthenticated } from '../rules';

function getRuleTree() {
  const rules = loadFilesSync(
    join(__dirname, '..', 'modules', '**', '*.shield.*'),
    { extensions: ['js', 'ts'] }
  );
  return defaultsDeep({}, ...rules);
}

export const shieldMiddleware = shield(getRuleTree(), {
  fallbackRule: isAuthenticated,
  fallbackError: createError(500, 'Internal server error!'),
});
