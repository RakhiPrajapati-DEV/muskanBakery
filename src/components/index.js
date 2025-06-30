function HamMenu(){
    const d = document.querySelector('.menuLinks');
    console.log(d);

    if (d.style.display == 'none' ){
        d.style.display = 'flex';
    }else{
        d.style.display = 'none';
    }

}

export default HamMenu;