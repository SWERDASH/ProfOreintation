if (document.querySelector('.buttons')){
    if(document.querySelector('.redirB')){
        document.querySelectorAll('.redirB').forEach((button) => {
            button.addEventListener('click', () => {
                open(button.getAttribute('redir'), "_top")
            })
        })
    }
}

var professions = [
    {
        name: 'Гуманитарные профессии',
        text:`Это профессии, основанные на работе с человеком, обществом, культурой, языком, информацией и коммуникацией. 
Их ядро — не формулы и вычисления, а смыслы, интерпретации, творчество и взаимодействие.`},
    {
        name: 'Естественные науки',
        text:`Это физика, химия, биология, география, геология, астрономия, экология и их многочисленные производные.
Профессии здесь часто носят исследовательский и прикладной характер и связаны с работой в лабораториях, полях, на производстве и в высокотехнологичных отраслях.`},
    {
        name: 'Информационные профессии',
        text:`Это профессии, связанные со сбором, обработкой, анализом, хранением, защитой и передачей информации с использованием компьютерных технологий.
Это не только "айтишники" в классическом понимании.`},
    {
        name: 'Сфера обслуживания',
        text:`Это огромный сектор экономики, где специалисты не производят материальный товар,
а оказывают услуги, удовлетворяющие повседневные, деловые, культурные и личные потребности людей и организаций.`}
]


if(document.querySelector('.Professions')){
    professions.forEach((prof, index) => {
        document.querySelector('.Professions').innerHTML += `
        <div class="profBox profBox${index}">
            <div id='prof${index}' class="profession">${prof.name}<div class="tri"></div></div>
        </div>
        `
        setTimeout(() => {document.getElementById(`prof${index}`).addEventListener('click', () => {
            var info = document.createElement("DIV");
            info.setAttribute("class", 'info')
            info.setAttribute("id", `info${index}`)
            info.innerHTML = `${prof.text}`
            if(!document.querySelector(`.profBox${index}`).classList.contains('expanded')){
                document.querySelector(`.profBox${index}`).append(info)
                document.querySelector(`.profBox${index}`).classList.add('expanded')
                document.getElementById(`prof${index}`).lastChild.classList.add('irt')
            }
            else{
                document.getElementById(`info${index}`).classList.add('infoBack')
                setTimeout(() => {document.getElementById(`info${index}`).remove()}, 150)
                document.querySelector(`.profBox${index}`).classList.remove('expanded')
                document.getElementById(`prof${index}`).lastChild.classList.remove('irt')
            }
        })}, 1)
    })
}