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
        
],
specs: [
    './test/specs/ushja/**/members.login.spec.ts',
    './test/specs/ushja/**/members.joinUshja.spec.ts',
   './test/specs/ushja/**/members.profileInfo.spec.ts',
    './test/specs/ushja/**/members.horseDetails.spec.ts'


],
    }
}
