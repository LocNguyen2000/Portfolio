const component = {}

component.header = (name, job) => {
    return `
    <div class="nav-bar">
        <span ><button class="logo"><h3>My Portfolio</h3></button></span>
        <ul class="nav-contents">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
        </ul>
    </div>
    <div class="banner">
        
    </div>
    <div class="intro">
        <h1>${name}</h1>
        <p>${job}</p>

    </div>`
}

component.body = () => {
    return component.about() + component.prjs()
}

component.about = () => {
    return `
    <div class="about-content">
        <div class="header">
            <h3>ABOUT ME</h3>
        </div>
        <div class="container">
            <img class="avatar" src = './img/banner.jpg'>
            <div>
                <ul class="btn-list">
                    <li>
                        <button id = 'prf-btn'>
                            
                            PROFILE
                        </button>
                    </li>
                    <li>
                        <button id = 'skl-btn'>
                            SKILLS
                        </button>
                    </li>
                    <li><button id = 'tnlg-btn'>TECHONOLOGY</button></li>
                </ul>
            </div>
            <div id = 'desc-list'>
            
            </div>    
        </div>
    </div>
    `
}

component.profile = (name, gender, place, email, phone) => {
    return  `<div class="desc">
        <div>
            <i class="fa fa-user-circle-o"></i>
            Name: ${name}
        </div>
        <br>
        <div>
            <i class="fa fa-male"></i>
            Gender: ${gender} 
        </div>
        <br>
        <div>
            <i class = "fa fa-address-card"></i>
            Places: ${place}
        </div>
        <br>
        <div>
            <i class="fa fa-envelope"></i>
            Email: ${email}
        </div>
        <br>
        <div>
            <i class="fa fa-phone"></i>
            Phone: ${phone} 
        </div>
        <br>
        <div>
            Career Goals: 
        </div>
        <br>
    </div>`
}

component.skills = () => {
    return `
    <div class="desc">
        <div>HTML, CSS, Javascript </div>
        <br>
        <div>Python, Java, C++ </div>
        <br>
        <div>English </div>
        <br>
    </div>
    `
}

component.tech = () => {
    return `
    <div class="desc">
        <ul>
            <li>
                <span>ReactJS</span>
                <span></span>
            </li>
            <br>
            <li>
                <span>NodeJs</span>
            </li>
            <br>

            <li>
                <span>ExpressJS</span>
            </li>
            <br>

            <li>
                <span>MongoDB</span>
            </li>
        </ul>
    </div>
    `
}


component.prjs = () => {
    return `
        <div id = "prj-cnt">
            <hr>
            <div class = 'header'>
               <h3> PROJECTS </h3>
            </div>
            <div>
                <ul  id = "prj-list"> 

                </ul>
            </div>
        </div>
        
        `
}

component.footer = ()=> {
    return `
    <div class="footer-container">
        <h3>MY SOCIAL MEDIA</h3>
    </div>
    <div class="contacts-info">
        <ul>
            <li>
                <h3>ABOUT ME</h3>
            </li>
            <li>
                <h3>
                    <a href="https://www.facebook.com/profile.php?id=100004473497005">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        FACEBOOK
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%AFu-l%E1%BB%99c-9607a11b1/">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        LINKEDIN
                    </a>
                </h3>
            </li>
            <li>
                <h3><a href="https://github.com/LocNguyen2000">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    GITHUB
                </a></h3>
            </li>
        </ul>
    </div>
    `
}
