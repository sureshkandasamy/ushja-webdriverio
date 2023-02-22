import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.js'

class HorseDetailsTablePage extends Page {
    /**
     * define elements
    */    
    
    get myHorsesTable () { return $('//*[text()="Manage my details"]/parent::div//table') }
    get myHorsesTableBody () { return this.myHorsesTable.$('/tbody') }

    async getTableRowCount () {
        return this.myHorsesTable.$$("tr").length;
    }

    //function to search by columnname return headercell=true/false, columnnumber
    //getcelldatabycolumnname will to use that above function



    //function to search by celldata 
    //return headercell=true/false, rownumber, entirerow's data

    //function to comparerowdata with expected rowdata (2 json objects)
    
    

   async getCellData1 (rowNumber: number, columnNumber: number) {      
        this.getRowData(1);
        //rowNumber = rowNumber+1;
        let cellData = this.myHorsesTable.$("//tr["+rowNumber+"]/td["+columnNumber+"]").getText()
        return cellData;
    }

    getRowHorseName (rowNumber: number) {
        let rowHorseName = this.myHorsesTable.$("//tbody/tr["+rowNumber+"]/th/div").getText()
        return rowHorseName;
    }

    

   async getRowData( rowNumber: number){

        let columnNames = await this.myHorsesTable.$$("//thead/tr/th").map(textElement => textElement.getText());
        let headingCell = await this.myHorsesTable.$("//tbody/tr[" + rowNumber + "]/th").getText()

        

        let rowDataAll = new Map;
        rowDataAll.set(columnNames[0], headingCell)

        let rowData = await this.myHorsesTable.$$("//tbody/tr[" + rowNumber + "]/td").map(textElement => textElement.getText());
       
     
        let i=1;
        rowData.forEach(element => {
            rowDataAll.set(columnNames[i], element)
            i = i+1;
        });

        console.log(rowDataAll);
        return rowDataAll;
    }
//"SILVER CREEK'S VICTORIOUS"
    // async getRowNumber(rowValue: string){
    //     let rows = await this.myHorsesTable.$$("//tbody/tr/td")
    //     rows.forEach(async row=>{
    //         let cells = await row.$$("td")
    //         cells.forEach(async cell => {
    //             if (await cell.getText()=="rowValue"){
    //                 return row;
    //             }
                
    //         })
    //     })
    // }

    async getCellData (rowValueToMatch: string, columnName: string) 
    {
        let rows = await this.myHorsesTable.$$("//tbody/tr")
        let rowNumber;
        rows.forEach(async row=>{
            let headingCell = await row.$("th")
            if (await headingCell.getText() == rowValueToMatch) {
                rowNumber = rows.indexOf(row) + 1;
                console.log("row number: " + rowNumber )
            }
        
        })

        let columnNames = await this.myHorsesTable.$$("//thead/tr/th").map(textElement => textElement.getText());
        let columnNumber;
        columnNames.forEach(async columnHeading=>{
            if (columnHeading == columnName) {
                //note: here we need not increment the column number as the header column will be treated separately as "th" in tbody element
                columnNumber = columnNames.indexOf(columnHeading);
                console.log("column number: " + columnNumber )

            }        
        })
      
        let cellData = await this.myHorsesTable.$("//tbody/tr["+rowNumber+"]/td["+columnNumber+"]").getText();
        console.log("data: " + cellData);
        return cellData;
    }

}

export default new HorseDetailsTablePage()