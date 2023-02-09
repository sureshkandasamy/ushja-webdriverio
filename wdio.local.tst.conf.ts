import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: ['selenium-standalone'],
    capabilities: [{
      browserName: 'chrome',
    },
    {
      browserName: "firefox",
    },


    ]
  }
}
