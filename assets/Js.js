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

    // Tăng 
    var click = 0;
    function clickIncrease() {
        click+= 1;
        document.getElementById("result").value = click;
        
    }
    //Giảm
    function clickDecrease() {
        if(click == 0)
            document.getElementById("result").value = 0;
        else
        {
            click-= 1;
            document.getElementById("result").value = click;
        }    
    }

// Dong mo dang nhap

var headerAccDropdown =  document.querySelector('.header-acc-dropdown');
var iconHeaderList = document.querySelector('.icon-header-list');
iconHeaderList.onclick = function OpenHeaderAccDropdown()
{   var isOpen = headerAccDropdown.clientHeight === 0;
    if( isOpen)
    {
        headerAccDropdown.style.display='block'
    }
    else
    {
        headerAccDropdown.style.display='none'

    }
}

