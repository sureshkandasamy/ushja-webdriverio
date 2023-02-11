import Page from './page.js'

class JoinUshjaDialogPage extends Page {
      /*** define elements */    
      get joinUSHJADialog () { return $('div[role="dialog"]') }

      get joinUSHJAActionCard () { return $('//div/p[contains(text(), "Join USHJA")]') }
      get joinUSHJAHeadingText () { return $('//h4[contains(text(), "Join USHJA")]') }
      get areYouApplyingText () { return $('//div/p[contains(text(),"Are you applying for Membership at a competition?")]') }

      get yesButton () { return $('//button/span[text()="Yes"]') }
      get noButton () { return $('//button/span[text()="No"]') }
      get continueButton () { return $('//button/span[text()="Continue"]') }
      get closeButton () { return $('button[aria-label="close"]') }

      get memberDetailsStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Member Details"]') }
      get demographicInfoStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Demographic Information"]') }
      get membershipTypeStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Membership Type"]') }
      get confirmMembershipStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Confirm Membership"]') }
      get makePaymentStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Make Payment"]') }
      get orderConfirmationStepLabel () { return $('//span[@class="MuiStepLabel-labelContainer"]/span[text()="Order Confirmation"]') }

}

export default new JoinUshjaDialogPage()