import Page from './page.js'



class AdminPage extends Page {
    // Menu objects
    get menuBar() { return $('//div[contains(@class, "MuiDrawer-docked")]') }
    get menuIcon() { return $('//div[contains (@class,"MuiToolbar-root")]/button') }



    get userListBoxButton() { return $('//div[contains(@class, "MuiInput-input")][@role="button"]') }
    get searchMemberInput() { return $('//input[@placeholder="Search member"]') }
    get searchButton() { return $('//span[text()="Search"]/ancestor::button') }
    get searchResult() { return $('//div[contains(text(),"Search results for")]') }


    // get emailCommunicationText() { return $('//p[text()="Email Communications"]/parent::div') }
    // get markasSoldText() { return $('//p[text()="Horse - Marked as Sold"]') }
    // get emailComPageScroll() { return $('//div[contains(@class,"makeStyles-content-5")]') };
    // get thumpsUpIcon() { return $('//div[contains(@class,"MuiBox-root-243")]') };
    // get viewInfoIcon() { return $('//div[contains(@class,"MuiBox-root-464")]/ancestor::td[contains(@class,"MuiTableCell-body")]'); }

    get emailCommunicationTable() { return $('//*[text()="Email Communications"]/ancestor::div[@role="button"]/following-sibling::*//table') }
    get emailCommunicationAccordionTab() { return $('//*[text()="Email Communications"]') }
    get membershipHistoryAccordionTab() { return $('//*[text()="Membership History"]') }
    get membershipHistoryTable() { return $('//*[text()="Membership History"]/ancestor::div[@role="button"]/following-sibling::*//table') }


    get generalInformationSection() { return $('//*[text()="General Information"]') }



    async clickMenuLink(linkMenu: string) {
        await $('//div[contains(@class, "MuiDrawer-root")]/descendant::span[text()="' + linkMenu + '"]').click();
    }
    async clickListBoxItem(itemName: string) {
        await $('//li[text()="' + itemName + '"]').click();
    }


    async getCellData1(rowNum: number, columnNum: number) {
        var cellData = await $('//table[contains(@class,"MuiTable-root")]/tbody/tr[' + rowNum + ']/td[' + columnNum + ']').getText();
        return cellData;
    }

    //    async getCellData2(rowNum:number,columnNum:number) {
    //     var cellData= await $('//*[text()="Email Communications"]/ancestor::div[@role="button"]/following-sibling::*//table/tbody/tr['+rowNum+']/td['+columnNum+']').getText();
    //     console.log("celldata" + cellData)
    //     return cellData;
    //  }
    async clickTableHeaderCellLink(rowNum: number) {
        await $('//table[contains(@class,"MuiTable-root")]/tbody/tr[' + rowNum + ']/th[1]').click();

    }
    async clickAccordionTab(tabLink: string) {

        await $('//*[text()="' + tabLink + '"]/ancestor::div[@role="button"]').waitForClickable()
        await $('//*[text()="' + tabLink + '"]/ancestor::div[@role="button"]').scrollIntoView();
        await $('//*[text()="' + tabLink + '"]/ancestor::div[@role="button"]').click();

    }

    async getMembershipField(labelName: string) {

        let fieldElement = await $('//div[contains(@class,"MuiBox-root")]//*[text()="' + labelName + '"]/following-sibling::*');
        return fieldElement;

    }


    async getRowData(rowNumber: number) {

        let columnNames = await $$('//*[text()="Email Communications"]/ancestor::div[@role="button"]/following-sibling::*//table/thead/tr/th').map(textElement => textElement.getText());
        let headingCell = await $('//*[text()="Email Communications"]/ancestor::div[@role="button"]/following-sibling::*//table/tbody/tr[' + rowNumber + ']/th').getText()

        let rowDataAll = new Map;

        let rowData = await $$('//*[text()="Email Communications"]/ancestor::div[@role="button"]/following-sibling::*//table/tbody/tr[' + rowNumber + ']/td').map(textElement => textElement.getText());
        rowData.unshift(headingCell)

        let i = 0;
        rowData.forEach(element => {
            rowDataAll.set(columnNames[i], element)
            i = i + 1;
        });
        console.log(rowDataAll);
        return rowDataAll;
    }


    async getRowDataMemHistory(rowNumber: number) {

        let columnNames = await $$('//*[text()="Membership History"]/ancestor::div[@role="button"]/following-sibling::*//table/thead/tr/th').map(textElement => textElement.getText());
        let headingCell = await $('//*[text()="Membership History"]/ancestor::div[@role="button"]/following-sibling::*//table/tbody/tr[' + rowNumber + ']/th').getText()

        let rowDataAll = new Map;

        let rowData = await $$('//*[text()="Membership History"]/ancestor::div[@role="button"]/following-sibling::*//table/tbody/tr[' + rowNumber + ']/td').map(textElement => textElement.getText());
        rowData.unshift(headingCell)

        let i = 0;
        rowData.forEach(element => {
            rowDataAll.set(columnNames[i], element)
            i = i + 1;
        });
        console.log(rowDataAll);
        return rowDataAll;
    }


    // async getCellData(rowValueToMatch: string, columnName: string) {
    //     let rows = await this.emailCommunicationTable.$$("//tbody/tr")
    //     let rowNumber;
    //     rows.forEach(async row => {
    //         let headingCell = await row.$("th")
    //         if (await headingCell.getText() == rowValueToMatch) {
    //             rowNumber = rows.indexOf(row) + 1;
    //             console.log("row number: " + rowNumber)
    //         }

    //     })
    //     let columnNames = await this.emailCommunicationTable.$$("//thead/tr/th").map(textElement => textElement.getText());
    //     let columnNumber;
    //     columnNames.forEach(async columnHeading => {
    //         if (columnHeading == columnName) {
    //             //note: here we need not increment the column number as the header column will be treated separately as "th" in tbody element
    //             columnNumber = columnNames.indexOf(columnHeading);
    //             console.log("column number: " + columnNumber)
    //         }
    //     })

    //     let cellData = await this.emailCommunicationTable.$("//tbody/tr[" + rowNumber + "]/td[" + columnNumber + "]").getText();
    //     console.log("data: " + cellData);
    //     return cellData;
    // }

    async verifyMemberDetails(strUshjaId: string, jsonMemberData: any) {

        let jsonMembershipValues = jsonMemberData["MembershipValues"]
        let jsonEmailCommunication = jsonMemberData["EmailCommunication"]
        let jsonMembershipHistory = jsonMemberData["MembershipHistory"]

        console.log(jsonMembershipValues)

        let strMemberType = jsonMembershipValues["MemberType"]
        let strStartDate = jsonMembershipValues["StartDate"]
        let strEndDate = jsonMembershipValues["EndDate"]

        let strEmailSubject = jsonEmailCommunication["Subject"]
        let strEmailSection = jsonEmailCommunication["Section"]
        let strEmailDate = jsonEmailCommunication["Date"]

        let strMemTypeMembershipHistory = jsonMembershipHistory["MemberType"]
        let strStartDateMembershipHistory = jsonMembershipHistory["StartDate"]


        //Navigate to Members page and search for the ushja id
        await this.clickMenuLink("Members");
        await this.userListBoxButton.click();
        await this.clickListBoxItem('USHJA Id');
        await this.searchMemberInput.setValue(strUshjaId);
        await this.searchButton.click();

        //wait for the search results to load in the table and click on the first link to view member's page 
        await browser.waitUntil(async () => {
            return (await this.searchResult.getText()).includes('Search results for')
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        await expect(this.searchResult).toHaveText('Search results for \'' + strUshjaId + '\'');
        expect(await this.getCellData1(1, 5)).toEqual(strUshjaId);
        await this.clickTableHeaderCellLink(1);

        //Verify the Member type, start date and end date
        await this.generalInformationSection.waitForEnabled();
        await expect(this.getMembershipField("Member Type")).toHaveText(strMemberType);
        await expect(this.getMembershipField("Start Date")).toHaveText(strStartDate);
        await expect(this.getMembershipField("End Date")).toHaveText(strEndDate);

        //Verify the top row in "Email Communications" table for subject, section and date values
        await this.clickAccordionTab('Email Communications');
        expect(await this.emailCommunicationTable).toBeDisplayed()
        let rowDataEmailComms = await this.getRowData(1)
        await expect(rowDataEmailComms.get("Subject")).toEqual(strEmailSubject)
        await expect(rowDataEmailComms.get("Section")).toEqual(strEmailSection)
        // await expect (rowDataEmailComms.get("Date")).toContain(strEmailDate)  

        //close the accordion before moving to next one
        await this.clickAccordionTab('Email Communications');
        await this.emailCommunicationTable.waitForDisplayed({ reverse: true })

        //Verify the top row in "Membership History" table for member type and date
        await this.clickAccordionTab('Membership History');
        expect(await this.membershipHistoryTable).toBeDisplayed()
        let rowDataMemHistory = await this.getRowDataMemHistory(1)
        await expect(rowDataMemHistory.get("Member Type")).toEqual(strMemTypeMembershipHistory)
        // await expect(rowDataMemHistory.get("Start Date")).toEqual(strStartDateMembershipHistory)
    }


}








export default new AdminPage()
