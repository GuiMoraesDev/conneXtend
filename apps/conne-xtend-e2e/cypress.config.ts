import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run conne-xtend:start' },
      ciWebServerCommand: 'nx run conne-xtend:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
