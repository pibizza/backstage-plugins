import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const rulesPlugin = createPlugin({
  id: 'rules',
  routes: {
    root: rootRouteRef,
  },
});

export const RulesPage = rulesPlugin.provide(
  createRoutableExtension({
    name: 'RulesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
