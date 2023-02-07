import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
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
