import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'Chrome',
        'bstack:options': {
          os: 'Windows',
          osVersion: '11',
          browserVersion: 'latest'
        }
      },

      {
        browserName: 'Safari',
        'bstack:options': {
          os: 'OS X',
          osVersion: 'Big Sur',
          browserVersion: '14.1'
        }
      },
      // {
      //   'bstack:options': {
      //     os: 'Windows',
      //     osVersion: '11',
      //     browserVersion: 'latest'
      //   },
      //   browserName: "Firefox"
      // },

      {
        browserName: 'chrome',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S20',
        },
      },



    ],
    // Options to be passed to Jasmine.
    jasmineOpts: {
      // Jasmine default timeout
      defaultTimeoutInterval: 120000,
      grep: '#browserstackTest',
    },
  }
}
