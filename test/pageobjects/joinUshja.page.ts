import Page from './page.js'


class JoinUshjaPage extends Page {

    get dialog () { return $('div[role="dialog"]') }
    get dialogHeading () { return $('//div[contains(@class, "MuiDialogTitle-root")]') }
    get usefIdTextBox () { return $('//input[@name="usefId"]') }
    get whichOrgTextBox () { return $('//input[@name="whichOrg"]') }
    get goGreenCheckBox() { return $('//*[text()="Help USHJA Go Green"]//following::label')  }
    get pleaseReadAgreementLink() { return $('//*[contains(text(),"Please read this Agreement before signing below")]')  }
    get pleaseReadAgreementCheckBox() { return $('//input[@name="checkedB"]')  }
    get signatureTextBox () { return $('//label[contains(text(),"Signature")]/following-sibling::*//input') }
    get tandcDialog () { return $('//div[@role="dialog"]//*[contains(text(),"Terms & Conditions")]') }
    get dialogCloseButton () { return $$('//div/button[@aria-label ="close"]')[1] }
    get tandCDialogCloseButton () { return $$('//div/button[@aria-label ="close"]')[2] }


    async clickQuickActionCard (cardName: string) {
        await $('//*[contains(text(),"Quick Actions")]/following-sibling::div//*[text()="' + cardName + '"]').waitForClickable()
        await $('//*[contains(text(),"Quick Actions")]/following-sibling::div//*[text()="' + cardName + '"]').click()
    }

    async clickQuickActionCardMobile (cardName: string) {
        await $('//*[contains(text(),"'+ cardName + '")]').waitForClickable()
        await (await $('//*[contains(text(),"'+ cardName + '")]')).click()
    }    
     
    async selectItemLinkFromList(labelName: string, itemName: string) {
        await $('//label[contains(text(),"' + labelName + '")]/following-sibling::div//*[@role="button"]').click();
        await $('//li[text()="' + itemName + '"]').click();

    }
    async selectOtherItemFromList(labelName: string, idName: string, itemName: string) {
        await $('//label[contains(text(),"' + labelName + '")]/following::div[@role="button" and @id="' + idName + '"]').click();//What is your Other Discipline Designation?
        await $('//li[text()="' + itemName + '"]').click();
    }
    async clickRadioButton(radioButtonName: string) {
       // await $('//span[@class="MuiIconButton-label"]/child::input[@value="' + radioButtonName + '"]').click();  //no
        await $('//label[@class="MuiFormControlLabel-root"]//*[text()="' + radioButtonName + '"]').click();

    }
   
    async clickButton(buttonName: string) {
        await  $('//button/span[text()="' + buttonName + '"]').waitForClickable()
        await $('//button/span[text()="' + buttonName + '"]').click();  //No
    }

    async clickCheckBox(itemName: string) {
        await $('//label[@class="MuiFormControlLabel-root"]//*[text()="' + itemName + '"]').click();
    }
    
    async getFieldElement(labelName: string) {
        //await $('//label[contains(text(),"' + labelName + '")]/following-sibling::div//input[@value="' + itemName + '"]');//Discipline Designation   Hunter
        return await $('//label[contains(text(),"' + labelName + '")]/following-sibling::div//input');//Discipline Designation   Hunter

    }
    async getFieldElementOtherDiscipline(labelName: string, intPosition: number) {
       return await $('//label[contains(text(),"' + labelName + '")]/following::div[' + intPosition + ']//input');//What is your Other Discipline Designation?
    }

}
export default new JoinUshjaPage()
