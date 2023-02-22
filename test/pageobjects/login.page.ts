import Page from './page.js'

class LoginPage extends Page {

      /** define elements */
      get loginText () { return $('p.login-text') }
      get username () { return $('input[type=text]') }
      get password () { return $('input[type=password]') }
      get submitButton () { return $('button.login-btn') }
      get loginError () { return $('p.Mui-error') }
      //get welcomeText () { return $('//p[contains(text(), "Welcome")]') }
      get welcomeText () { return $('//div//*[contains(text(),"Welcome")]') }      

       /*** define or overwrite page methods */
    open () {
        return super.open('/')

    }

    async submit () {
        await this.submitButton.click()
    }

    async login(username:string,password:string) {
        this.open()
          await this.username.setValue(username);
          await this.password.setValue(password);
          await this.submitButton.click();
          await this.welcomeText.waitForDisplayed(); 
  
      }
}

export default new LoginPage()