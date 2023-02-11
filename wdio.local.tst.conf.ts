import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: ['selenium-standalone'],
    capabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [ 'disable-infobars', 'disable-popup-blocking', 'disable-notifications','disable-extensions' ],
        prefs: {
          'profile.managed_default_content_settings.popups' : 2,
          'profile.managed_default_content_settings.notifications' : 2,
        }
      }
    }]
  }
}
