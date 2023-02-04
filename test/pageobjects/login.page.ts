import Page from './page.js'

class LoginPage extends Page {
      /**
     * define elements
     */
      get loginText () { return $('p.login-text') }
      get username () { return $('input[type=text]') }
      get password () { return $('input[type=password]') }
      get submitButton () { return $('button.login-btn') }
      get loginError () { return $('p.Mui-error') }
      get welcomeText () { return $('//h4[contains(text(), "Welcome")]') }

      

       /**
     * define or overwrite page methods
     */
    open () {
        return super.open('login')
    }

    async submit () {
        await this.submitButton.click()
    }

}

export default new LoginPage()