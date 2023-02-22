import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: ['devtools'],
    capabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        //args: [ 'mobileEmulation' ],        
        mobileEmulation: {deviceName: 'iPhone SE'}
      }
    }]
  }
}
