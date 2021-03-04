const component = {}

component.header = (name, job) => {
    return `
    <div class="nav-bar">
        <span class="logo">Portfolio</span>
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