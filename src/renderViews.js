class renderViews{
  #parentElement=document.querySelector('.header4')
  #data;
  render(data){
   this.#data=data;
   console.log(data)
   this.#renderCon(this.#data)
  }

  #renderCon(obj){
    obj.map(val=>{
      const html=`
        <div class="cinemawatch">
          <div class="block">
            <img src="${val.img}" alt="">
            <div><p>Name:${val.name}</p><p>Type:${val.type}</p><p>Year:${val.year}</p></div>
            <a href="">Watch</a>

          </div>
            
        </div>
        `
       this.#parentElement?.insertAdjacentHTML('afterbegin',html)
    })
  }
}

export default new renderViews();