fetch('./professions.json')
.then(response => response.json())
.then(data => {loadPage(data)})

function loadPage(professions){
    if (document.querySelector('.chooseProfFrame')){
        professions.forEach((prof, index) => {
            var profOption = document.createElement('DIV')
            profOption.setAttribute('class', 'profOption')
            profOption.setAttribute('id', `profOption${index}`)
            profOption.innerHTML = prof.name
            profOption.addEventListener('click', () => {
                setActive(document.querySelectorAll('.profOption'), index)
                viewInfo(prof, index)
            })
            document.querySelector('.chooseProfFrame').append(profOption)
        })
    }
}

function setActive(x, index){
    x.forEach((p, i) => {
        if (p.classList.contains("chosed")){
            p.classList.remove("chosed")
        }
    })
    x[index].classList.add("chosed")
}

function viewInfo(prof, index){
    document.querySelector('.Table').innerHTML = ''
    if(document.querySelector('.Table')){
        prof.professions.forEach((p, i) => {
            var info = document.createElement("DIV")
            info.innerHTML = `
                    <div class="infoTable">
                        <div>${p.title}</div>
                        <div>${p.category}</div>
                        <div>${p.specializations.toString().replaceAll(",", ", ")}</div>
                        <div>${p.roles.toString().replaceAll(",", ", ")}</div>
                        <div>${p.activities.toString().replaceAll(",", ", ")}</div>
                        <div>${p.workplaces.toString().replaceAll(",", ", ")}</div>
                        <div>${p.skills_or_focus.toString().replaceAll(",", ", ")}</div>
                        <div>${p.notes.toString().replaceAll(",", ", ")}</div>
                    </div>`
            document.querySelector('.Table').append(info)
        })
    }
}

if (document.querySelector('.buttons')){
    if(document.querySelector('.redirB')){
        document.querySelectorAll('.redirB').forEach((button) => {
            button.addEventListener('click', () => {
                open(button.getAttribute('redir'), "_top")
            })
        })
    }
}