import ProfileInfoPage from '../../pageobjects/profileInfo.page.js'
import LoginPage from '../../pageobjects/login.page.js'
import * as testData from '../../testdata/testData.json';


describe('profile Information', ()=> {
    console.log(testData);


    beforeAll(async function() { 
        console.log("before all joinUshja tests");
        await LoginPage.open()
        await LoginPage.username.setValue('SummerStoffel21')
        await LoginPage.password.setValue('Bellsoph@01')
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed() 
 });


  it('#Regression #UAT Member profile info should be correct', async () => {
    
    await ProfileInfoPage.profileInfoName.waitForDisplayed()
    await expect(ProfileInfoPage.profileInfoName).toHaveText("SUMMER STOFFEL")
    await expect(ProfileInfoPage.profileInfoId).toHaveTextContaining("HJ263638")

    await expect(ProfileInfoPage.profileInfoStatus).toHaveText("Inactive")
    await expect(ProfileInfoPage.profileInfoCategory).toHaveText("Owner, Breeder")
    await expect(ProfileInfoPage.profileInfoPrimaryDiscipline).toHaveText("Jumper")
    await expect(ProfileInfoPage.profileInfoOtherDiscipline).toHaveText("Jumper, Hunter")


})
    

})