const showBtn = document.querySelector('navBtn');
const topnav = document.querySelector('top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classlist.contains('showNav')){
        topNv.casslist.remove('shawNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    }else {
        topnav.classlist.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }

}
);