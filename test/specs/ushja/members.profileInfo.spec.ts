import ProfileInfoPage from '../../pageobjects/profileInfo.page.js'
import testData from '../../../utils/testData.js'


describe('profile Information', ()=> {

  it('#UAT #Membership Member profile info should be correct', async () => {
    
    await ProfileInfoPage.profileInfoName.waitForDisplayed()
    await expect(ProfileInfoPage.profileInfoName).toHaveText(testData.tstdata.profileInfo.profileInfoName)
    await expect(ProfileInfoPage.profileInfoId).toHaveTextContaining(testData.tstdata.profileInfo.profileInfoId)

    await expect(ProfileInfoPage.profileInfoStatus).toHaveText(testData.tstdata.profileInfo.profileInfoStatus)
    await expect(ProfileInfoPage.profileInfoCategory).toHaveText(testData.tstdata.profileInfo.profileInfoCategory)
    await expect(ProfileInfoPage.profileInfoPrimaryDiscipline).toHaveText(testData.tstdata.profileInfo.profileInfoPrimaryDiscipline)
    await expect(ProfileInfoPage.profileInfoOtherDiscipline).toHaveText(testData.tstdata.profileInfo.profileInfoOtherDiscipline)


})
    

})