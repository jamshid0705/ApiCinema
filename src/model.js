import * as helper from './helper.js'
import {URL_CON} from './config.js'
// import { PAGE } from './config.js'

export const state={
  recipe:[],
}


export const model=async function(val){
  try{
    
    const data1=await helper.URL(`${URL_CON}${val}&page=${1}`)
    console.log(data1)
    state.recipe=data1.Search.map(val=>{
      return {
        name:val.Title,
        img:val.Poster,
        type:val.Type,
        id:val.imdbID,
        year:val.Year,
      }
    })
  }
  catch(err){
   throw err;
  }  
  
  
}