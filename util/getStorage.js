function getMyStorage(){
  let valueList = [];
  let i = 0;
  for(i=0;i<10;i++){
    let key = 'book' + i;
    let value = wx.getStorageSync(key);
    if(value){
      valueList.push(value);
      continue;
    }
  }
  return valueList
}

function judgeInArray(arrayToSearch, attr, value){
  for(let i=0; i<arrayToSearch.length; i++){
    if(arrayToSearch[i][attr] == value){
      return true
    }
  }
  return false
}

module.exports = {
  getMyStorage: getMyStorage,
  judgeInArray: judgeInArray
}