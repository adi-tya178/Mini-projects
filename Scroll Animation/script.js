const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkboxes)
checkboxes()

function checkboxes(){
      const triggerbutton = window.innerHeight / 5 * 4
      boxes.forEach(box=>{
          const boxTop = box.getBoundingClientRect().top

          if(triggerbutton>boxTop){
              box.classList.add('show')
          }
          else{
              box.classList.remove('show')
          }
      })
}
