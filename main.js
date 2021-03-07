window.onload = init 

const prjList = [
    {   
        header: "WEB BÁN HÀNG QUẦN ÁO CỦA LỚP PHÁT TRIỂN WEB",
        job: "Front-end Developer",
        desc: `Một thành viên trong nhóm làm back-end bằng NodeJS với lưu trữ dữ liệu ở trong MongoDB. Nhóm trưởng làm ở 2 bên frontend với back-end. Kết quả được trang web với giao diện đẹp và đủ tính năng`,
        role: "Tạo front-end cho trang web bán hàng và trang admin bằng ReactJS.",
        link: "https://github.com/LocNguyen2000/SwingsWeb",
        tech: "ReactJS, NodeJS, Express, MongoDB.",
        img: ""
    },
    {   
        header: "WEB CHAT CỦA LỚP CÔNG NGHỆ PHẦN MỀM",
        job: "Web Developer",
        desc: `Một trang web có đủ tính năng của trang chat. Web chat được tạo bằng HTML, CSS và Javascript. Cơ sở dữ liệu sử dụng Firebase để lưu trữ các tin nhắn và xác thực tài khoản người dùng.`,
        role: "Trực tiếp làm một trang web chat cơ bản từ front-end và back-end",
        link: "https://locnguyen2000.github.io/Chat-App/index.html",
        tech: "HTML, CSS, Javascript, Firebase.",
        img: ""

    }

]

function init(){
    document.getElementById('header').innerHTML += component.header('Nguyen Huu Loc', 'Frontend Developer')
    document.getElementById('body').innerHTML += component.body()
    document.getElementById('footer').innerHTML += component.footer()

    // PROJECT CONTENT
    var prjContent = document.getElementById('prj-list')
    for (prj of prjList){
        // console.log(prj);
        prjContent.innerHTML += `
            <li> 
                <div class = "desc">
                    <h2>PROJECT: ${prj.header} </h2>
                    <p>Job: ${prj.job} </p>
                    <p>Description: ${prj.desc} </p>
                    <p>Role: ${prj.role} </p>
                    <p>Github Code: <a href = "${prj.link}"> ${prj.link}</a></p>
                    <p>Technology: ${prj.tech} </p>
                </div>
            </li>
        `
    }
    

    aboutDesc = document.getElementById('desc-list')

    // TODO: BUTTON EVENT:
    profileBtn = document.getElementById('prf-btn')
    profileBtn.onclick = () => {
        aboutDesc.innerHTML = component.profile('Nguyen Huu Loc', 'Male', 'Hanoi, Vietnam', 'locnguyenhuu2k@gmail.com', '0384696172')
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