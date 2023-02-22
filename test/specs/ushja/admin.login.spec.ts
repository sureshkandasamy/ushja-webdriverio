import adminLoginPage from '../../pageobjects/admin.login.page.js'
import { AdminTestData } from '../../testdata/adminTestData.js'
// import allureReporter from '@wdio/allure-reporter'


describe('Admin Login', ()=> {

  it('Admin login should be sucessful for correct credentials ', async () => {

    // await browser.url('https://testadmin.ushja.org/login')
    await adminLoginPage.open()
    await adminLoginPage.username.setValue(AdminTestData.AdminUser1.username)
    await adminLoginPage.password.setValue(AdminTestData.AdminUser1.password)
    await adminLoginPage.signinButton.click()
   //await adminLoginPage.dashboardLink.waitForDisplayed({ timeout: 5000 })
    await expect(adminLoginPage.dashboardText).toBeDisplayed()
    // await adminLoginPage.dashboardButton.click()

  })
})  