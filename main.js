window.onload = init 

function init(){
    document.getElementById('header').innerHTML += component.header('Nguyen Huu Loc', 'Frontend Developer')
    document.getElementById('body').innerHTML += component.body('Loc')
}