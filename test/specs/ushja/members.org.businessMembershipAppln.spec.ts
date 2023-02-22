import businessmembershipPage from '../../pageobjects/businessMembership.page.js'
import allureReporter from '@wdio/allure-reporter'

describe('#Business Business Membership application', ()=> {

    beforeEach(() => {
        allureReporter.addFeature("Business");
    });
    

    it('Successfully submit a Business Membership application', async () => {

        await businessmembershipPage.clickActionCard("Business Membership")
        await expect(businessmembershipPage.dialogHeading.$('//*[contains(text(), "Business Membership")]')).toExist()
        await businessmembershipPage.continueButton.click()

        await expect(businessmembershipPage.dialogHeading.$('//*[contains(text(), "Business Membership Application")]')).toExist()
        await businessmembershipPage.businessNameTextBox.setValue("Stable Run")
        await businessmembershipPage.ushjaIdTextBox.setValue("262982")
        await businessmembershipPage.addressTextBox.setValue("24486 Yukon Rd")
        await businessmembershipPage.cityTextBox.setValue("Kasilof")
        await businessmembershipPage.stateTextBox.setValue("Alaska")
        await businessmembershipPage.zipTextBox.setValue("99610")
        await businessmembershipPage.phoneTextBox.setValue("9072626261")
        await businessmembershipPage.faxTextBox.setValue("64424235")
        await businessmembershipPage.emailTextBox.setValue("test@gmail.com")
        await businessmembershipPage.websiteTextBox.setValue("www.stablerun.com")
        await businessmembershipPage.socialmediaTextBox.setValue("stablerun@facebook.com")
        await businessmembershipPage.affiliationsCheckBox.click()
        await businessmembershipPage.primaryBusinessListBox.scrollIntoView()
        await businessmembershipPage.primaryBusinessListBox.click()
        await businessmembershipPage.primaryBusinessListBoxOptions.$('//li[contains(text(),"Fencing and Stabling") ]').click()       
        await businessmembershipPage.BusinessOwnerTextBox.setValue("John Smith")
        await businessmembershipPage.BusinessOwnerUshjaIdTextBox.setValue("5678322")        
        await businessmembershipPage.businessApplnContinueButton.click()

        await expect(businessmembershipPage.dialogHeading.$('//*[contains(text(), "Primary Business Contact Information")]')).toExist()
        await businessmembershipPage.contactFirstnameTextBox.setValue("Katie")
        await businessmembershipPage.contactLastnameTextBox.setValue("Holmes")
        await businessmembershipPage.contactPersonTitleTextBox.setValue("Mr")
        await businessmembershipPage.contactUshjaIdTextBox.setValue("66666")
        await businessmembershipPage.addressTextBox.setValue("24486 Yukon Rd")
        await businessmembershipPage.cityTextBox.setValue("Kasilof")
        await businessmembershipPage.contactStateListBox.scrollIntoView()
        await businessmembershipPage.contactStateListBox.click()
        await businessmembershipPage.contactStateListBoxOptions.$('//li[contains(text(),"Alaska") ]').click()           
        await businessmembershipPage.zipTextBox.setValue("99610")
        await businessmembershipPage.phoneTextBox.setValue("9072626261")
        await businessmembershipPage.faxTextBox.setValue("64424235")
        await businessmembershipPage.emailTextBox.setValue("test@gmail.com")
        await businessmembershipPage.businessApplnContinueButton.click()

        await expect(businessmembershipPage.dialogHeading.$('//*[contains(text(), "Signature of Primary Business Contact")]')).toExist()
        await businessmembershipPage.signatureTextBox.scrollIntoView()
        await businessmembershipPage.signatureTextBox.setValue("test sign")
        await businessmembershipPage.businessApplnContinueButton.scrollIntoView()
        await businessmembershipPage.businessApplnContinueButton.click()

        await expect(businessmembershipPage.dialogHeading.$('//*[contains(text(), "Make Payment")]')).toExist()
        await businessmembershipPage.paymentFirstnameTextBox.setValue("Wayne")
        await businessmembershipPage.paymentLastnameTextBox.setValue("Ellery")
        await businessmembershipPage.paymentAddressTextBox.setValue("test payment address")
        await businessmembershipPage.paymentPostalCodeTextBox.setValue("1234")
        await businessmembershipPage.paymentCardNumTextBox.setValue("123456789")
        await businessmembershipPage.paymentCardMonthTextBox.setValue("02/25")
        await businessmembershipPage.paymentCardCvcTextBox.setValue("123")
        await businessmembershipPage.paymentsaveCardCheckBox.click()  
        
        await businessmembershipPage.closeButton.scrollIntoView()
        await businessmembershipPage.closeButton.click()  

    })
})