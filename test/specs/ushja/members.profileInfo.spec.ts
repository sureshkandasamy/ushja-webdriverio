import ProfileInfoPage from '../../pageobjects/profileInfo.page.js'
import LoginPage from '../../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'
import testData from '../../../utils/testData.js'

describe('profile Information', ()=> {

    beforeAll(async function() { 
        //console.log(testData.tstdata.username)
        //console.log(testData.tstdata.password)
        await LoginPage.open()
        await LoginPage.username.setValue(testData.tstdata.username)
        await LoginPage.password.setValue(testData.tstdata.password)
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed() 
 });


  it('#Regression #UAT1 Member profile info should be correct', async () => {
    allureReporter.addFeature("Members");

    
    await ProfileInfoPage.profileInfoName.waitForDisplayed()
    await expect(ProfileInfoPage.profileInfoName).toHaveText(testData.tstdata.profileInfo.profileInfoName)
    await expect(ProfileInfoPage.profileInfoId).toHaveTextContaining(testData.tstdata.profileInfo.profileInfoId)

    await expect(ProfileInfoPage.profileInfoStatus).toHaveText(testData.tstdata.profileInfo.profileInfoStatus)
    await expect(ProfileInfoPage.profileInfoCategory).toHaveText(testData.tstdata.profileInfo.profileInfoCategory)
    await expect(ProfileInfoPage.profileInfoPrimaryDiscipline).toHaveText(testData.tstdata.profileInfo.profileInfoPrimaryDiscipline)
    await expect(ProfileInfoPage.profileInfoOtherDiscipline).toHaveText(testData.tstdata.profileInfo.profileInfoOtherDiscipline)


})
    

})