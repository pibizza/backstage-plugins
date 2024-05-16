import { loggerToWinstonLogger } from '@backstage/backend-common';
import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';

import { createRouter } from './service/router';

/**
 * The rules backend plugin.
 *
 * @alpha
 */
export const rulesPlugin = createBackendPlugin({
  pluginId: 'rules',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        http: coreServices.httpRouter,
      },
      async init({ config, logger, http }) {
        http.use(() =>
          createRouter({ ...config, logger: loggerToWinstonLogger(logger) }),
        );
      },
    });
  },
});
