import fs from "fs";

let jsondata: any;
fs.readFile("./test/testdata/testData.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }

  jsondata =  JSON.parse(jsonString);
 // console.log("File data:", jsonString);
});

class testData {
    get busuinesslogin() {
      //console.log(jsondata);
      return jsondata.businesslogin
    };

    get normallogin() { 
      //console.log(jsondata);
      return jsondata.normallogin
    };

    /*
    getEnv(){
        return process.env.Env
    }

    getMemberDetails(){
        return 
    } */

}
export default new testData()