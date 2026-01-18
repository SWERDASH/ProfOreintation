if (document.querySelector('.buttons')){
    if(document.querySelector('.redirB')){
        document.querySelectorAll('.redirB').forEach((button) => {
            button.addEventListener('click', () => {
                open(button.getAttribute('redir'), "_top")
            })
        })
    }
}



if(document.querySelector('.Professions')){
    document.querySelectorAll('.profession').forEach((prof, index) => {
        prof.addEventListener('click', () => {
            var info = document.createElement("DIV");
            info.setAttribute("class", 'info')
            info.setAttribute("id", `info${index}`)
            info.innerHTML = "INFO INFO INFO INFO INFO INFO"
            if(!document.querySelector(`.profBox${index}`).classList.contains('expanded')){
                document.querySelector(`.profBox${index}`).append(info)
                document.querySelector(`.profBox${index}`).classList.add('expanded')
                prof.lastChild.classList.add('irt')
            }
            else{
                document.getElementById(`info${index}`).classList.add('infoBack')
                setTimeout(() => {document.getElementById(`info${index}`).remove()}, 150)
                document.querySelector(`.profBox${index}`).classList.remove('expanded')
                prof.lastChild.classList.remove('irt')
            }
        })
    })
}