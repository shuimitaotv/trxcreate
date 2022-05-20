const TronWeb = require("tronweb");
const fs = require('fs');
var num=0;
async function  createAddress(){
  var wallet=await TronWeb.createAccount();
  var last=wallet.address.base58[wallet.address.base58.length-1];
  var count=0;
  var lastworld=wallet.address.base58.substring(wallet.address.base58.length-7,wallet.address.base58.length)
  for (let index = wallet.address.base58.length-1; index >= 0; index--) {
    if( wallet.address.base58[index]==last){
      count++;
    }
    else{
      break;
    }
  }
  num++;
  
  if(count>4){
    console.log(`可用钱包出现:${wallet.address.base58}`);
    console.log(`已创建钱包数量:${num}`);
    fs.writeFileSync(`./${wallet.address.base58}.json`,JSON.stringify(wallet));
  }
  // createAddress();
  if(lastworld.toLowerCase()=='hash315' || lastworld.toUpperCase()=="HASH315"){
    console.log(`可用钱包出现:${wallet.address.base58}`);
    console.log(`已创建钱包数量:${num}`);
    fs.writeFileSync(`./${wallet.address.base58}.json`,JSON.stringify(wallet));
  }
  createAddress();

}
console.log("插件开始运行");
createAddress();
