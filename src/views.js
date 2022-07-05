class inputView{
  #header=document.querySelector('.header4')
  #header2=document.querySelector('.header2')
  #input=document.querySelector('input');
  #btn=document.querySelector('.btn');
  #btnPage=document.querySelector('.btn-right')
  
  val(){
    const data=this.#input?.value;
    this.#clear()
    return data;
  }


  #clear(){
    this.#input.value='';
    this.#header.textContent=''
  }
  
  eventView(handle){
     this.#btn?.addEventListener('click',function(e){
       e.preventDefault()
        handle()
     })
  }

  errorMesage(){
    const html=`
    <h5>The movie you were looking for was unfortunately not found :(</h5>
    `
    this.#header?.insertAdjacentHTML('afterbegin',html)
  }

  eventPage(handle){
    this.#header2?.addEventListener('click',function(e){
      e.preventDefault()
      const data=e.target.closest('.btn-right')
      const data1=(data.getAttribute('id'));
      console.log(data1)

      handle(data1);
    })
  }
}
export default new inputView();