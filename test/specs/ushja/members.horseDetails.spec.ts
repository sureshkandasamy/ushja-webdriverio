import HorseDetailsTablePage from '../../pageobjects/horseDetailsTable.page.js'
import LoginPage from '../../pageobjects/login.page.js'


describe('My horse details table', ()=> {

    beforeAll(async function() { 
        console.log("before all my horse details tests");
        await LoginPage.open()
        await LoginPage.username.setValue('SummerStoffel21')
        await LoginPage.password.setValue('Bellsoph@01')
        await LoginPage.submit()

        await LoginPage.welcomeText.waitForDisplayed() 
 });


  it('#Regression #UAT user should be able to view the My Horse details sections and the details are correct', async () => {
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