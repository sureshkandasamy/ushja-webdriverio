import HorseDetailsTablePage from '../../pageobjects/horseDetailsTable.page.js'
import testData from '../../../utils/testData.js'

describe('My horse details table', ()=> {

  
//   it('#Horses user should be able to view the My Horse details for "Processing" status', async () => {

//     await HorseDetailsTablePage.myHorsesTable.waitForDisplayed()
//     await expect(HorseDetailsTablePage.myHorsesTable).toExist()
//     //const rows = await HorseDetailsTablePage.getTableRowCount()

//     expect(await HorseDetailsTablePage.getRowHorseName(1)).toEqual("FLEUVE")

//     expect(await HorseDetailsTablePage.getCellData(1, 1)).toEqual("-")
//     expect(await HorseDetailsTablePage.getCellData(1, 2)).toEqual("HJ6000240")
//     expect(await HorseDetailsTablePage.getCellData(1, 3)).toEqual("Annual Outreach")
//     expect(await HorseDetailsTablePage.getCellData(1, 4)).toEqual("-")
//     expect(await HorseDetailsTablePage.getCellData(1, 5)).toEqual("-")
//     expect(await HorseDetailsTablePage.getCellData(1, 6)).toEqual("Processing")

// })

it('#UAT #Horses user should be able to view the My Active Horse details My Horse details for "Active" status', async () => {

  await HorseDetailsTablePage.myHorsesTable.waitForDisplayed()
  await expect(HorseDetailsTablePage.myHorsesTable).toExist()

    expect(await HorseDetailsTablePage.getRowHorseName(1)).toEqual("SILVER CREEK'S VICTORIOUS")

  expect(await HorseDetailsTablePage.getCellData(1, 1)).toEqual("5396040")
  expect(await HorseDetailsTablePage.getCellData(1, 2)).toEqual("HJ5396040")
  expect(await HorseDetailsTablePage.getCellData(1, 3)).toEqual("Life")
  expect(await HorseDetailsTablePage.getCellData(1, 4)).toEqual("03/22/2016")
  expect(await HorseDetailsTablePage.getCellData(1, 5)).toEqual("-")
  expect(await HorseDetailsTablePage.getCellData(1, 6)).toEqual("Active")

  // expect(await HorseDetailsTablePage.getRowHorseName(3)).toEqual("TEMPERANCE 67")

  // expect(await HorseDetailsTablePage.getCellData(3, 1)).toEqual("-")
  // expect(await HorseDetailsTablePage.getCellData(3, 2)).toEqual("HJ6000241")
  // expect(await HorseDetailsTablePage.getCellData(3, 3)).toEqual("Annual Outreach")
  // expect(await HorseDetailsTablePage.getCellData(3, 4)).toEqual("10/18/2022")
  // expect(await HorseDetailsTablePage.getCellData(3, 5)).toEqual("10/31/2023")
  // expect(await HorseDetailsTablePage.getCellData(3, 6)).toEqual("Active")

})
    

})