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


module.exports = {
  getMyStorage: getMyStorage
}