import Page from './page.js'

class HorseDetailsTablePage extends Page {
      /**
     * define elements
     */    
      get myHorsesTable () { return $('//div/h5[text()="Manage my details"]/parent::div//table') }
      get myHorsesTableBody () { return this.myHorsesTable.$('/tbody') }

      async getTableRowCount () {
            return this.myHorsesTable.$$("tr").length;
        }


        getCellData (rowNumber: number, columnNumber: number) {
           
            //rowNumber = rowNumber+1;
            let cellData = this.myHorsesTable.$("//tr["+rowNumber+"]/td["+columnNumber+"]").getText()
            return cellData;
        }

        getRowHorseName (rowNumber: number) {
            let rowHorseName = this.myHorsesTable.$("//tbody/tr["+rowNumber+"]/th/div").getText()
            return rowHorseName;
        }


      }

export default new HorseDetailsTablePage()