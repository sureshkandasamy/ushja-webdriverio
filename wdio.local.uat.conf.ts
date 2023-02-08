import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            'browserName': 'chrome',
            port: 4444,
            'goog:chromeOptions': {
               args: ['--headless']
            }
        },
        {
            browserName: 'safari',
            port: 4445
        }
        ],

    // Options to be passed to Jasmine.
    jasmineOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 120000,
        grep: '#UAT',
    },
    }
}
