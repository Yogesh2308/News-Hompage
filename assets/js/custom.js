const mobMenu = document.querySelector('.mob-menu img')
const navigation = document.querySelector('.navigation')
const closeBtn = document.querySelector('.close-btn')
mobMenu.addEventListener('click', function(){
    navigation.classList.toggle('active')
    navigation.style.width = "100%"
})

function openNav(){
    document.getElementById('myNav').style.width= "100%"
}

closeBtn.addEventListener('click', function(e){
    navigation.style.width="0%"
    navigation.classList.remove('active')
})