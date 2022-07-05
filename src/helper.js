import * as config from './config.js'

const timeout=function(a){
  return new Promise(function(_,reject){
    setTimeout(function(){
       reject(new Error('Siz qidirgan film topilmadi'))
    },a*1000)
  })
}
export const URL=async function(val){
  try{
    const data=await Promise.race([fetch(val),timeout(config.TIME_)]);
    const data1=await data.json();
    return data1;
  }
  catch(err){
    throw err;
  }
  
}