import ProfileInfoPage from '../../pageobjects/profileInfo.page.js'
import testData from '../../../utils/testData.js'
import allureReporter from '@wdio/allure-reporter'

describe('profile Information', ()=> {

  beforeEach(() => {
    allureReporter.addFeature("Membership");
   });

  it('#UAT #Membership Member profile info should be correct', async () => {    
    await ProfileInfoPage.profileInfoName.waitForDisplayed()
    await expect(ProfileInfoPage.profileInfoName).toHaveText(testData.normallogin.profileInfo.profileInfoName)
    await expect(ProfileInfoPage.profileInfoId).toHaveTextContaining(testData.normallogin.profileInfo.profileInfoId)

    await expect(ProfileInfoPage.profileInfoStatus).toHaveText(testData.normallogin.profileInfo.profileInfoStatus)
    await expect(ProfileInfoPage.profileInfoCategory).toHaveText(testData.normallogin.profileInfo.profileInfoCategory)
    await expect(ProfileInfoPage.profileInfoPrimaryDiscipline).toHaveText(testData.normallogin.profileInfo.profileInfoPrimaryDiscipline)
    await expect(ProfileInfoPage.profileInfoOtherDiscipline).toHaveText(testData.normallogin.profileInfo.profileInfoOtherDiscipline)
  })   

})