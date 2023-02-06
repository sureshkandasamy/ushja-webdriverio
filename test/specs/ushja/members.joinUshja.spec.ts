import JoinUshjaDialogPage from '../../pageobjects/joinUshjaDialog.page.js'
import LoginPage from '../../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'


describe('joinUshja', ()=> {

    beforeAll(async function() { 
        await LoginPage.open()
        await LoginPage.username.setValue('SummerStoffel21')
        await LoginPage.password.setValue('Bellsoph@01')
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed() 
 });


  it('#Regression #UAT user should be able to view the Join USHJA dialog', async () => {
    allureReporter.addFeature("Members");

    await JoinUshjaDialogPage.joinUSHJAActionCard.click()
    await JoinUshjaDialogPage.joinUSHJAHeadingText.waitForDisplayed()
    await expect(JoinUshjaDialogPage.joinUSHJAHeadingText).toExist()
    await expect(JoinUshjaDialogPage.areYouApplyingText).toExist()

    await expect(JoinUshjaDialogPage.memberDetailsStepLabel).toExist()
    await expect(JoinUshjaDialogPage.demographicInfoStepLabel).toExist()
    await expect(JoinUshjaDialogPage.membershipTypeStepLabel).toExist()
    await expect(JoinUshjaDialogPage.confirmMembershipStepLabel).toExist()
    await expect(JoinUshjaDialogPage.makePaymentStepLabel).toExist()
    await expect(JoinUshjaDialogPage.orderConfirmationStepLabel).toExist()

    await JoinUshjaDialogPage.closeButton.click()



})
    

})