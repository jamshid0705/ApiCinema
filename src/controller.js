import views from "./views.js";

import * as model from './model.js'

import renderViews from "./renderViews.js";





const viewControl=async function(){
  try{
    const val=views.val();
    await model.model(val);
    console.log(model.state.recipe);
    renderViews.render(model.state.recipe);
  
  }
  catch(err){
    views.errorMesage()

  }
}
views.eventPage(viewControl)
views.eventView(viewControl);

