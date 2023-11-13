const mapInnerArrayToFalttenArray = (innerArr) => {
  let dataFlatArray = [];

  innerArr.forEach((item) => {
    if (Array.isArray(item)) {
      // check if inner array found re call the funcation recuresion concept
      dataFlatArray = dataFlatArray.concat(mapInnerArrayToFalttenArray(item));
    } else {
      // its an normal objec it will be pushed to collected array dataFlatArray
      dataFlatArray.push(item);
    }
  });

  return dataFlatArray;
};

// simple input
const input = "[4, [[5], [6, [7], 8], 9, 10]]";
//  simple out put -> [4, 5, 6, 7, 8, 9, 10]
// to call it ->> mapInnerArrayToFalttenArray(JSON.parse(input))
