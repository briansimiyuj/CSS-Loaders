const loader = document.querySelector(".loader"),

     content = document.querySelector(".content") 



     
const opacity = () =>{

    const elements = [loader, content]

    
    elements.forEach(element => {

        element.classList.add("opacity")
        
    })

}


setTimeout(() => {
    
    console.log('perfect')

    opacity()      

}, 4000)
