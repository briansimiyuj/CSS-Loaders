const loader = document.querySelector(".loader"),

     content = document.querySelector(".content") 



     
const opacity = () =>{

    const elements = [loader, content]

    
    elements.forEach(element => {

        element.classList.add("opacity")
        
    })

}


setTimeout(() => {

    opacity()      

}, 4000)
