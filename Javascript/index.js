let isMenu = false;
function hamburgerClick(){
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('body').classList.toggle('active')
    document.getElementById('toggle-bg').classList.toggle('active')
    document.getElementById('toggle-drawer').classList.toggle('active')
    if(isMenu == true){
        menuToggle()
    }
    
}

function menuToggle(){
    document.getElementById('menu-options').classList.toggle('active')
    if(isMenu == false){
        isMenu = true;
    }
    else{
        isMenu = false;
    }
   
}

function linksOpen(id){
    document.getElementById(id).classList.toggle('active')
}

