import JoinUshjaDialogPage from '../../pageobjects/joinUshjaDialog.page.js'
import LoginPage from '../../pageobjects/login.page.js'

describe('joinUshja', ()=> {
  
  it('#UAT #Membership user should be able to click Join USHJA and displayed with Join USHJA dialog', async () => {

    await JoinUshjaDialogPage.joinUSHJAActionCard.waitForDisplayed()
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