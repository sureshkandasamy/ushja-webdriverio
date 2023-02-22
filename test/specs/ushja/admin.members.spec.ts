import AdminPage from "../../pageobjects/admin.page.js";
import AdminLoginPage from "../../pageobjects/admin.login.page.js";
import { AdminTestData } from "../../testdata/adminTestData.js";

const now = new Date();
const today = now.toLocaleDateString();
const strUshjaId = "HJ167261"
// const strMemberType = "Inactive"
// const strStartDate = "-"
// const strEndDate = "-"
// const strEmailSubject = "USHJA Horse - Sold"
// const strEmailSection = "Horse - Marked as Sold"
// const strMemTypeMembershipHistory = "Outreach"

let jsonMemberData = {
  "MembershipValues": {
    "MemberType": "Inactive",
    "StartDate": "-",
    "EndDate": "-"
  },
  "EmailCommunication":{
    "Subject": "USHJA Horse - Sold", 
    "Section": "Horse - Marked as Sold",
    "Date": today

  },
  "MembershipHistory":{
    "MemberType": "Outreach",
    "startDate": today
  }

}

describe("Admin page", () => {
  beforeEach(async function () {
    var username = AdminTestData.AdminUser1.username;
    var password = AdminTestData.AdminUser1.password;
    await AdminLoginPage.login(username, password);
  });

  it("verify email communication in member page using function", async () => {
    await AdminPage.verifyMemberDetails(strUshjaId,jsonMemberData)
  });

  xit("verify email communication in member page", async () => {
    //Navigate to Members page and search for the ushja id
    await AdminPage.clickMenuLink("Members");
    await AdminPage.userListBoxButton.click();
    await AdminPage.clickListBoxItem('USHJA Id');
    await AdminPage.searchMemberInput.setValue(strUshjaId);
    await AdminPage.searchButton.click();

    //wait for the search results to load in the table and click on the first link to view member's page 
    await browser.waitUntil(async function () {
      return (await AdminPage.searchResult.getText()).includes('Search results for')
    }, {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s'
    });
    await expect(AdminPage.searchResult).toHaveText('Search results for \'' + strUshjaId +'\'');
    expect (await AdminPage.getCellData1(1, 5)).toEqual(strUshjaId);
    await AdminPage.clickTableHeaderCellLink(1);

    //Verify the Member type, start date and end date
    await AdminPage.generalInformationSection.waitForEnabled();
    await expect(AdminPage.getMembershipFieldValue("Member Type")).toHaveText(strMemberType);
    await expect(AdminPage.getMembershipFieldValue("Start Date")).toHaveText(strStartDate);
    await expect(AdminPage.getMembershipFieldValue("End Date")).toHaveText(strEndDate);

    //Verify the top row in "Email Communications" table for subject, section and date values
    await AdminPage.clickAccordionTab('Email Communications');
    expect(await AdminPage.emailCommunicationTable).toBeDisplayed()
    let rowDataEmailComms = await AdminPage.getRowData(1)
    await expect(rowDataEmailComms.get("Subject")).toEqual(strEmailSubject)
    await expect(rowDataEmailComms.get("Section")).toEqual(strEmailSection)
    // await expect (rowDataEmailComms.get("Date")).toContain(today)  

    //close the accordion before moving to next one
    await AdminPage.clickAccordionTab('Email Communications');
    await AdminPage.emailCommunicationTable.waitForDisplayed({ reverse: true })

    //Verify the top row in "Membership History" table for member type and date
    await AdminPage.clickAccordionTab('Membership History');
    expect(await AdminPage.membershipHistoryTable).toBeDisplayed()
    let rowDataMemHistory = await AdminPage.getRowDataMemHistory(1)
    await expect(rowDataMemHistory.get("Member Type")).toEqual(strMemTypeMembershipHistory)
    // await expect(rowDataMemHistory.get("Start Date")).toEqual(today)

  });
});
