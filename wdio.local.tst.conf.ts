import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            // 'wdio:devtoolsOptions': {
            //     headless: true
            // },
        },
        {
                browserName: "firefox",
          },
    
        
],
// specs: [
//     './test/specs/ushja/**/members.login.spec.ts',
//     './test/specs/ushja/**/members.joinUshja.spec.ts',
//    './test/specs/ushja/**/members.profileInfo.spec.ts',
//     './test/specs/ushja/**/members.horseDetails.spec.ts'
// ],
    }
}
