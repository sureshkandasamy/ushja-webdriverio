import HorseDetailsTablePage from '../../pageobjects/horseDetailsTable.page.js'
import LoginPage from '../../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'
import testData from '../../../utils/testData.js'

describe('My horse details table', ()=> {

    beforeAll(async function() { 
        await LoginPage.open()
        await LoginPage.username.setValue(testData.tstdata.username)
        await LoginPage.password.setValue(testData.tstdata.password)
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed() 
 });


  it('#Regression #UAT user should be able to view the My Horse details sections and the details are correct', async () => {
    allureReporter.addFeature("Members");

    await HorseDetailsTablePage.myHorsesTable.waitForDisplayed()
    await expect(HorseDetailsTablePage.myHorsesTable).toExist()
    const rows = await HorseDetailsTablePage.getTableRowCount()

    expect(rows).toBe(1)

    expect(await HorseDetailsTablePage.getRowHorseName(1)).toEqual("SILVER CREEK'S VICTORIOUS")

    expect(await HorseDetailsTablePage.getCellData(1, 1)).toEqual("5396040")
    expect(await HorseDetailsTablePage.getCellData(1, 2)).toEqual("HJ5396040")
    expect(await HorseDetailsTablePage.getCellData(1, 3)).toEqual("Life")
    expect(await HorseDetailsTablePage.getCellData(1, 4)).toEqual("03/22/2016")
    expect(await HorseDetailsTablePage.getCellData(1, 5)).toEqual("-")
    expect(await HorseDetailsTablePage.getCellData(1, 6)).toEqual("Active")




})
    

})