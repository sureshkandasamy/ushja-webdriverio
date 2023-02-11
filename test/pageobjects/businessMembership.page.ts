import Page from './page.js'

class BusinessMembership extends Page {
      /*** define elements */    
      get loginText () { return $('p.login-text') }
      
      get businessMembershipActionCard () { return $('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"]//child::p[contains(text(),"Business Membership")]') }

      get dialog () { return $('div[role="dialog"]') }
      get dialogHeading () { return $('//div[contains(@class, "MuiDialogTitle-root")]') }
      //get dialogHeading () { return $('//div[contains(@class, "MuiDialogTitle-root")]//*[contains(text(), "Business Membership")]') }
    
      get competitionYearRadioBtn () { return $('//span/input[@type="radio"]') }
    
      get businessNameTextBox () { return $('//input[@name="name"]') }
      get ushjaIdTextBox () { return $('//input[@name="id"]') }
      get addressTextBox () { return $('//input[@name="address"]') }
      get cityTextBox () { return $('//input[@name="city"]') }
      get stateTextBox () { return $('//input[@name="state"]') }
      get zipTextBox () { return $('//input[@name="zip"]') }
      get phoneTextBox () { return $('//input[@name="phone"]') }
      get faxTextBox () { return $('//input[@name="fax"]') }
      get emailTextBox () { return $('//input[@name="email"]') }
      get websiteTextBox () { return $('//input[@name="website"]') }
      get socialmediaTextBox () { return $('//input[@name="socialMedia"]') }
      get affiliationsCheckBox () { return $('//input[@name="affliations"][@type="checkbox"]') }
      get primaryBusinessListBox () { return $('//div[@id="mui-component-select-primaryBusiness"]') }
      get primaryBusinessListBoxOptions () { return $('//ul[contains(@class, "MuiMenu-list")]') }
      get BusinessOwnerTextBox () { return $('//input[@name="businessOwner"]') }
      get BusinessOwnerUshjaIdTextBox () { return $('//input[@name="businessId"]') }


      get contactFirstnameTextBox () { return $('//input[@name="contactFirstName"]') }
      get contactLastnameTextBox () { return $('//input[@name="contactLastName"]') }
      get contactPersonTitleTextBox () { return $('//input[@name="contactPersonTitle"]') }
      get contactUshjaIdTextBox () { return $('//input[@name="contactUshjaId"]') }
      get contactStateListBox () { return $('div#mui-component-select-state') }
      get contactStateListBoxOptions () { return $('//ul[contains(@class, "MuiMenu-list")]') }
      get contactAlternateNameTextBox () { return $('//input[@name="alternateContactName"]') }

      get signatureTextBox () { return $('//input[@class="MuiInputBase-input MuiOutlinedInput-input"]') }

      get paymentFirstnameTextBox () { return $('//input[@name="firstName"]') }
      get paymentLastnameTextBox () { return $('//input[@name="lastName"]') }
      get paymentAddressTextBox () { return $('//input[@name="line1"]') }
      get paymentPostalCodeTextBox () { return $('//input[@name="postal_code"]') }
      get paymentCardNumTextBox () { return $('//input[@placeholder="Card number"]') }
      get paymentCardMonthTextBox () { return $('//input[@id="card-expiry"]') }
      get paymentCardCvcTextBox () { return $('//input[@id="cvc"]') }
      get paymentsaveCardCheckBox () { return $('//input[@name="saveMyCard"]') }

      //get continueButton () { return $('//div[contains (@class, "MuiDialogActions-root")]//button/span[text()="Continue"]') }
      get continueButton () { return $('//button/span[text()="Continue"]') }


      //*[@class ="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-flex-end" or @style="opacity: 1;"]//child::button/span[contains(text(),"Continue")]
      get businessApplnContinueButton () { return $('//*[@class ="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-flex-end" or @style="opacity: 1;"]//child::button/span[contains(text(),"Continue")]') }
      get closeButton () { return $('//div[contains(@class,"makeStyles-dialogTitle-262")]//button') }


}

export default new BusinessMembership()