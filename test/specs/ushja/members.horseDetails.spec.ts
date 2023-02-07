import HorseDetailsTablePage from '../../pageobjects/horseDetailsTable.page.js'
import testData from '../../../utils/testData.js'

describe('My horse details table', ()=> {

  
  it('#UAT #Horses Failing testcase-user should be able to view the My Horse details for "Processing" status', async () => {

    await HorseDetailsTablePage.myHorsesTable.waitForDisplayed()
    await expect(HorseDetailsTablePage.myHorsesTable).toExist()
    //const rows = await HorseDetailsTablePage.getTableRowCount()

    expect(await HorseDetailsTablePage.getRowHorseName(1)).toEqual("FLEUVE-FAIL")

    expect(await HorseDetailsTablePage.getCellData(1, 1)).toEqual("-")
    expect(await HorseDetailsTablePage.getCellData(1, 2)).toEqual("HJ6000240")
    expect(await HorseDetailsTablePage.getCellData(1, 3)).toEqual("Annual Outreach")
    expect(await HorseDetailsTablePage.getCellData(1, 4)).toEqual("-")
    expect(await HorseDetailsTablePage.getCellData(1, 5)).toEqual("-")
    expect(await HorseDetailsTablePage.getCellData(1, 6)).toEqual("Processing")

})

it('#UAT #Horses user should be able to view the My Active Horse details My Horse details for "Active" status', async () => {

  await HorseDetailsTablePage.myHorsesTable.waitForDisplayed()
  await expect(HorseDetailsTablePage.myHorsesTable).toExist()
  const rows = await HorseDetailsTablePage.getTableRowCount()

  expect(await HorseDetailsTablePage.getRowHorseName(2)).toEqual("TEMPERANCE 67")

  expect(await HorseDetailsTablePage.getCellData(2, 1)).toEqual("-")
  expect(await HorseDetailsTablePage.getCellData(2, 2)).toEqual("HJ6000241")
  expect(await HorseDetailsTablePage.getCellData(2, 3)).toEqual("Annual Outreach")
  expect(await HorseDetailsTablePage.getCellData(2, 4)).toEqual("10/18/2022")
  expect(await HorseDetailsTablePage.getCellData(2, 5)).toEqual("10/31/2023")
  expect(await HorseDetailsTablePage.getCellData(2, 6)).toEqual("Active")

})
    

})