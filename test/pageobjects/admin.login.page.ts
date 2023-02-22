import Page from './page.js'

class AdminLoginPage extends Page {

      
      get username () { return $('//input[@name="username"]') }
      get password () { return $('//input[@name="password"]') }
      get signinButton () { return $('//button[@type="submit"]') }
      get dashboardText (){ return $('//span[text()="Dashboard"]')}
      get dashboardButton (){ return $('//span[text()="Dashboard"]/ancestor::button')}
      

      
    open () {
        return super.open('https://testadmin.ushja.org/')
    }


   async login(username:string,password:string) {
      this.open()
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.signinButton.click()
        await this.dashboardText.waitForDisplayed()

        


    }

}

export default new AdminLoginPage()