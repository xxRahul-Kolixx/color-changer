const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        switch(e.target.id){
            case 'red': body.style.backgroundColor=e.target.id
            break
            case 'blue': body.style.backgroundColor=e.target.id
            break
            case 'yellow': body.style.backgroundColor=e.target.id
            break
            case 'green': body.style.backgroundColor=e.target.id
            break
            default: body.style.backgroundColor = "#fff" 
        }
    })
} )