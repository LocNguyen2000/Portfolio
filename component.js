const component = {}

component.header = (name, job) => {
    return `
    <div class="nav-bar">
        <span class="logo">My Portfolio</span>
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
    return `<div><div/>`
}

component.profile = () => {
    return  `<div class="desc">
        <div>Name: Nguyen Huu Loc</div>
        <br>
        <div>Gender: Male </div>
        <br>
        <div>Places: Hanoi, Vietnam</div>
        <br>
        <div>Email: locnguyenhuu2k@gmail.com </div>
        <br>
        <div>Phone: 0384696172 </div>
        <br>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit, ipsum ipsa nihil nulla quisquam quasi neque recusandae? </div>
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
        <div class = 'desc'>
        </div>
    `
}