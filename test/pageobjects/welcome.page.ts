import Page from './page.js'

class WelcomePage extends Page {
      /**
     * define elements
     */    
      get profileInfoName () { return $('p.makeStyles-name-21') }
      get profileInfoId () { return $('p.makeStyles-membershipId-23') }

      get profileInfoStatus () { return $('//div/p[text()="Status"]/parent::div/div/p') }
      get profileInfoCategory () { return $('//div/p[text()="Category"]/parent::div/div/p') }

      get profileInfoPrimaryDiscipline () { return $('//div/p[text()="Primary Discipline"]/parent::div/div/p') }

      get profileInfoOtherDiscipline () { return $('//div/p[text()="Other Discipline"]/parent::div/div/p') }

   


}

export default new WelcomePage()