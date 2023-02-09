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


        },
        {
            browserName: "firefox",
            "moz:firefoxOptions": {
                args: ['-headless']
            },

        }

        ]
    }
}
