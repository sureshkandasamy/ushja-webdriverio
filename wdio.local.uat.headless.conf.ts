import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['selenium-standalone'],
        capabilities: [{
            browserName: 'chrome',
            "goog:chromeOptions": {
                args: ['-headless']
            },


        }
        ],

        // Options to be passed to Jasmine.
        jasmineOpts: {
            // Jasmine default timeout
            defaultTimeoutInterval: 120000,
            grep: '#UAT'
        },
    }
}
