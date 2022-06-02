const header = document.querySelector('.header');
const headercontacts =  document.querySelector('.header-contacts');
    window.addEventListener("scroll",function(){
        
        var x = pageYOffset;
        // console.log(x)
        if(x > 20){
           
            header.classList.add('close-header-wrapper');
            headercontacts.classList.add('close-heade-contacts');
            
        }
        else{
            
            header.classList.remove('close-header-wrapper');
            headercontacts.classList.remove('close-heade-contacts');
        }
    })
    
