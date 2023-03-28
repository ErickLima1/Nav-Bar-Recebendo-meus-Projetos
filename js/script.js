const openMenu = () => {
    document.getElementById('menuNav').style.width = '250px';
    document.getElementById('content').style.marginLeft  = '250px';
} 

const closeMenu = () => {
    document.getElementById('menuNav').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
}


document.getElementById("btn-abrir").addEventListener('click', openMenu);
document.getElementById("nav-hide").addEventListener('click', closeMenu);
