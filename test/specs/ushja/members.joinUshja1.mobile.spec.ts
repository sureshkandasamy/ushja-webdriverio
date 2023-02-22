import JoinUshjaPage from "../../pageobjects/joinUshja.page.js";
import MemberLoginPage from "../../pageobjects/login.page.js";
import { MemberTestData } from "../../testdata/memberTestData.js";
import allureReporter from '@wdio/allure-reporter'

import AdminPage from "../../pageobjects/admin.page.js";
import AdminLoginPage from "../../pageobjects/admin.login.page.js";
import { AdminTestData } from "../../testdata/adminTestData.js";

describe("join USJHA", () => {
    beforeEach(async function () {
        //allureReporter.addFeature("Membership");
        console.log("11111")
        var username =  MemberTestData.MemberUser1.username;
        var password =  MemberTestData.MemberUser1.password;
        await MemberLoginPage.login(username,password);
        console.log("22222")
    });


    it("User should be able to add a new membership using Join USHJA", async () => {         
        await JoinUshjaPage.clickQuickActionCardMobile("Join USHJA");
        console.log("33333")
        await JoinUshjaPage.dialog.waitForExist();
        expect (await JoinUshjaPage.dialogHeading).toHaveText("Join USHJA")

        /*
        //1 Member details screen
        await JoinUshjaPage.clickButton("No");

        //2 Demographic Information screen
        await JoinUshjaPage.selectItemLinkFromList("What is your Primary Discipline","Jumper")
        await JoinUshjaPage.selectItemLinkFromList("What is your USEF Status","Professional")       
        await JoinUshjaPage.selectOtherItemFromList("What is your Other Discipline Designation","mui-component-select-sec_discipline","Driving")
        await JoinUshjaPage.selectOtherItemFromList("What is your Other Discipline Designation","mui-component-select-ter_discipline","Hunter")
        await JoinUshjaPage.clickCheckBox("Coach");
        await JoinUshjaPage.clickRadioButton("No");
        await JoinUshjaPage.clickButton("Continue");

        console.log("step3")

        //3 Membership Type
        await JoinUshjaPage.selectItemLinkFromList("Gender","Male");
        await JoinUshjaPage.selectItemLinkFromList("Race","Asian");
        await JoinUshjaPage.selectItemLinkFromList("Disability status","No");
        await JoinUshjaPage.selectItemLinkFromList("Are you a Veteran","No");
        await JoinUshjaPage.clickButton("Continue");

        console.log("step4")

        //4 Confirm Membership
        await JoinUshjaPage.clickRadioButton("Outreach $ 0");
        await JoinUshjaPage.goGreenCheckBox.click();
        await JoinUshjaPage.clickButton("Continue");

        console.log("step5")

        //5 Make Payment
        expect( await JoinUshjaPage.getFieldElement("Discipline Designation")).toHaveText("Jumper")
        expect( await JoinUshjaPage.getFieldElement("USEF Status")).toHaveText("Professional")
        let usefId = (await JoinUshjaPage.getFieldElement("USEF ID")).getText()
        expect( await JoinUshjaPage.getFieldElementOtherDiscipline("Other Discipline Designations",1)).toHaveText("Driving")
        expect( await JoinUshjaPage.getFieldElementOtherDiscipline("Other Discipline Designations",2)).toHaveText("Hunter")
        expect( await JoinUshjaPage.getFieldElement("Selected membership")).toHaveText("Outreach $ 0")
        expect( await JoinUshjaPage.getFieldElement("Are you a member of a state")).toHaveText("Yes")
        expect( await JoinUshjaPage.getFieldElement("I do not need a hard copy card")).toHaveText("Yes")

        console.log("step6")
        //Terms and Conditions and Signature
        await JoinUshjaPage.pleaseReadAgreementLink.click();
        await JoinUshjaPage.tandcDialog.waitForExist();
        await JoinUshjaPage.tandCDialogCloseButton.click();
        await JoinUshjaPage.tandcDialog.waitForDisplayed({ reverse: true });
        await JoinUshjaPage.pleaseReadAgreementCheckBox.click();

        await JoinUshjaPage.signatureTextBox.scrollIntoView()
        await JoinUshjaPage.signatureTextBox.setValue("test sign")
        await JoinUshjaPage.clickButton("Update");
        await JoinUshjaPage.dialog.waitForDisplayed({ reverse: true });

        console.log("step7")   
        //Login to Admin portal and verify details
        const now = new Date();
        const today = now.toLocaleDateString();
        const strUshjaId = "HJ167261"

        let jsonMemberData = {
            "MembershipValues": {
              "MemberType": "Outreach",
              "StartDate": today,
              "EndDate": today
            },
            "EmailCommunication":{
              "Subject": "Welcome to the USHJA", 
              "Section": "Membership",
              "Date": today
          
            },
            "MembershipHistory":{
              "MemberType": "Coach",
              "startDate": today
            }
          
          }

        var username = AdminTestData.AdminUser1.username;
        var password = AdminTestData.AdminUser1.password;
        await AdminLoginPage.login(username, password);
        await AdminPage.verifyMemberDetails(strUshjaId,jsonMemberData)


        
        // var Designation=await JoinUshjaPage.checkInputValue("Discipline Designation","Hunter");
        // await expect(Designation).toEqual("Hunter");
        // var usefStatus=await JoinUshjaPage.checkInputValue("USEF Status","Professional");
        // await expect(usefStatus).toEqual("Professional");
        // var OtherDiscipline=await JoinUshjaPage.checkInputValue("Other Discipline Designations","Friesian");
        // await expect(OtherDiscipline).toEqual("Friesian");
        // var SelectedMembership=await JoinUshjaPage.checkInputValue("Selected membership","Outreach $ 0");
        // await expect(SelectedMembership).toEqual("Outreach $ 0");
        // var StateOrLocal=await JoinUshjaPage.checkInputValue("Are you a member of a state and/or local org?","no");
        // await expect(StateOrLocal).toEqual("no");

          */

        

     });
});
