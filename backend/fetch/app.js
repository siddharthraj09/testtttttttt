import fetch from "node-fetch";

const dataHandler = async () => {
  try {
    const res = await fetch(
      "https://coderbyte.com/api/challenges/json/json-cleaning"
    );
    const element = await res.json();

    console.log(element);
    let obj = {};
    for (let key in element) {
      let singleElement = element[key];

      // obj[key]={}
      let innerObj = {};

      for (let innerKey in singleElement) {
        // let innerSingleData = singleElement[innerKey]
         if (
          singleElement[innerKey] == "" ||
          singleElement[innerKey] == "-" ||
          singleElement[innerKey] == "N/A"
        ) {
            
           
        }
       else {
           //console.log('----------------');
         // console.log(innerKey)
          innerObj[`${innerKey}`] = singleElement[innerKey];
        }
      }

      obj[key] = innerObj; 

    }
   // console.log(obj);
    const obj1={...obj,age:25}

    console.log(obj1);

  } catch (error) {
    console.log(error);
  }
};
dataHandler();
