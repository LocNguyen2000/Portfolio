window.onload = init 

function init(){
    document.getElementById('header').innerHTML += component.header('Nguyen Huu Loc', 'Frontend Developer')
    document.getElementById('body').innerHTML += component.about()




    aboutDesc = document.getElementById('desc-list')

    // TODO: BUTTON EVENT:
    profileBtn = document.getElementById('prf-btn')
    profileBtn.onclick = () => {
        aboutDesc.innerHTML = component.profile()
    }

    sklBtn = document.getElementById('skl-btn')
    sklBtn.onclick = () => {
        aboutDesc.innerHTML = component.skills()
    }
    tnlgBtn = document.getElementById('tnlg-btn')
    tnlgBtn.onclick = () =>{
        aboutDesc.innerHTML = component.tech()
    }
}