document.addEventListener('DOMContentLoaded', function() {
    
    const logoContainer = document.querySelector('.logo-container');
    const sideBar = document.querySelector('.tv-side-nav-container')
    const btnCloseSideNav = document.getElementById('btnCloseSideNav')

    logoContainer.addEventListener('click', function() {
        if(window.innerWidth < 700) {
            sideBar.style.display = 'flex'
        }
    })

    btnCloseSideNav.addEventListener('click', function() {
        sideBar.style.display = 'none'
    })

});

