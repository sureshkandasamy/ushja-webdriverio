import AdminPageObjects from "../pageobjects/admin.page.js";
import AdminLoginPage from "../pageobjects/admin.login.page.js";
import { AdminTestData } from "../testdata/adminTestData.js";

const now = new Date();
const today = now.toLocaleDateString();
const ushjaId = "HJ167261"
const MemberType = "Inactive"
const emailSubject ="USHJA Horse - Sold"
const emailSection = "Horse - Marked as Sold"
const memTypeMembershipHistory = "Outreach"

    var username =  AdminTestData.AdminUser1.username;
    var password =  AdminTestData.AdminUser1.password;
    await AdminLoginPage.login(username, password);

    await AdminPageObjects.clickMenuLink("Members");
    await AdminPageObjects.userListBoxButton.click();
    await AdminPageObjects.clickListBoxItem('USHJA Id');
    await AdminPageObjects.searchMemberInput.setValue(ushjaId);
    await AdminPageObjects.searchButton.click();
    await expect(AdminPageObjects.searchResult).toBeDisplayed();
    await expect(AdminPageObjects.searchResult).toHaveText('Search results for \'' + ushjaId +'\'');
    expect (await AdminPageObjects.getCellData1(1, 5)).toEqual(ushjaId);
   // expect(membershipId).toEqual('HJ167261');
    await AdminPageObjects.clickTableHeaderCellLink(1);
    await AdminPageObjects.generalInformationSection.waitForEnabled();

    await expect(AdminPageObjects.getMembershipData("Member Type")).toHaveText(MemberType);


    await AdminPageObjects.clickAccordionTab('Email Communications');
    expect(await AdminPageObjects.emailCommunicationTable).toBeDisplayed()
    let rowDataEmailComms = await AdminPageObjects.getRowData(1)
    await expect(rowDataEmailComms.get("Subject")).toEqual(emailSubject)
    await expect(rowDataEmailComms.get("Section")).toEqual(emailSection)
    // await expect (rowDataEmailComms.get("Date")).toContain(today)  

    await AdminPageObjects.clickAccordionTab('Email Communications');
    await  AdminPageObjects.emailCommunicationTable.waitForDisplayed({ reverse: true })

    await AdminPageObjects.clickAccordionTab('Membership History');
    expect(await AdminPageObjects.membershipHistoryTable).toBeDisplayed()
    let rowDataMemHistory = await AdminPageObjects.getRowDataMemHistory(1)
    await expect(rowDataMemHistory.get("Member Type")).toEqual(memTypeMembershipHistory)
   // await expect(rowDataMemHistory.get("Start Date")).toEqual(today)

  
