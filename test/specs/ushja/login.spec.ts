import LoginPage from '../../pageobjects/login.page.js'

describe('login', ()=> {

  it('#Negative should deny access with wrong credentials ', async () => {
    await LoginPage.open()
    await LoginPage.username.setValue('test')
    await LoginPage.password.setValue('test123invaLid')
    await LoginPage.submit()

    await LoginPage.loginError.waitForDisplayed()
   await expect(LoginPage.loginError).toHaveTextContaining('The username/ID you provided does not exist. If you have an account, please search for your information and create a new password.')

})
    it('#Regression #UAT should allow access to welcome page with correct credentials ', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('SummerStoffel21')
        await LoginPage.password.setValue('Bellsoph@01')
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed()
       await expect(LoginPage.welcomeText).toHaveTextContaining('Welcome')

    })

})