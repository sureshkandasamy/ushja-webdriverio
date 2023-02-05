import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            // 'wdio:devtoolsOptions': {
            //     headless: true
            // },
            // "goog:chromeOptions": {
            // 	args: ['-headless']
          	// },


        },
            {
                browserName: "firefox",
                //acceptInsecureCerts: true,
                // "moz:firefoxOptions": {
                //     args: ['-headless']
                //   },
    
        }        
        
]
    }
}
