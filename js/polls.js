
if (document.querySelector('.buttons')){
    if(document.querySelector('.redirB')){
        document.querySelectorAll('.redirB').forEach((button) => {
            button.addEventListener('click', () => {
                open(button.getAttribute('redir'), "_top")
            })
        })
    }
    document.querySelector('.start_button').addEventListener('click', () => {
        if(document.querySelector('.FirstName').value != ''
        && document.querySelector('.SecondName').value != ''
        && (document.querySelector('.Class').value != '' && document.querySelector('.Class').value >= 9)){
            startPoll(document.querySelector('.FirstName').value, document.querySelector('.SecondName').value, document.querySelector('.Class').value)
        }
        else{
            if (document.querySelector('.Class').value < 9){
                Alerts("опрос для 9-11 классов")
            }
            else{
                Alerts("заполни все поля")
            }
        }
    })
}

if(document.querySelector('input')){
    document.querySelectorAll('input').forEach((ins) => {
        ins.addEventListener('input', () => {
            if (document.querySelector('.Alerts').innerHTML != ''){
                document.querySelector('.Alerts').innerHTML = ''
            }
        })
    })
}

function Alerts(message){
    if(document.querySelector('.Alerts')){
        document.querySelector('.Alerts').innerHTML = `Внимание ${message}!`
    }
}
var id1 = ["Физика", "Биология", "Химия", "География", "История"]
var id2 = ["Информатика",  "Математика"]
var id3 = ["Обществознание", "История"]
var id4 = ["Литература", "Русский язык", "Английский язык"]
function checkID(ans){
    if (id1.includes(ans)){
        return "Естественные науки"
    }
    if (id2.includes(ans)){
        return "Информационные профессии"
    }
    if (id3.includes(ans)){
        return "Сфера обслуживания"
    }
    if (id4.includes(ans)){
        return "Гуманитарные профессии"
    }
}

function startPoll(name, sname, clas){
    document.querySelector('.main').innerHTML = ''
    var PollFrame = document.createElement("DIV")
    PollFrame.classList.add("PollFrame")
    document.querySelector('.main').append(PollFrame)
    var answ = []
    poll[0].answers.forEach((ans, i) => {
        answ.push({
            name: ans,
            value: 0
        })
    })
    var user = {
        name: name,
        sname: sname,
        class: clas,
        que: [],
        total: answ
    }
    poll.forEach((q, index) => {
        user.que.push({
            answer: -1,
        })
    })
    questioner(0, user)
}

var poll = [
    {
        num: 1,
        question: "Какой предмет в школе вам нравится больше всего?",
        answers:["Обществознание", "Физика", "Литература", "Информатика",  "Русский язык", "Английский язык", "История", "Биология", "Химия", "География", "Математика"]
    },
    {
        num: 2,
        question: "Какие предметы вы выбрали бы для сдачи, даже если бы они не были обязательны, исходя из интереса?",
        answers:["Обществознание", "Физика", "Литература", "Информатика",  "Русский язык", "Английский язык", "История", "Биология", "Химия", "География", "Математика"]
    },
    {
        num: 3,
        question: "Какой предмет вы готовы изучать дополнительно, сверх школьной программы?",
        answers:["Обществознание", "Физика", "Литература", "Информатика",  "Русский язык", "Английский язык", "История", "Биология", "Химия", "География", "Математика"]
    },
    {
        num: 4,
        question: "На каких уроках выполнять практические работы вам интереснее всего?",
        answers:["Обществознание", "Физика", "Литература", "Информатика",  "Русский язык", "Английский язык", "История", "Биология", "Химия", "География", "Математика"]
    }
]

function questioner(number, user){
    if (number+1 <= poll.length){
        var polling = poll[number]
        var ur = ['https://cdn.7tv.app/emote/01GQFT1WF80002Q9KS8SKQMHHY/4x.gif',
            'https://cdn.7tv.app/emote/01GWSGBQ7R0008X0SB6ANMACKG/4x.gif',
            'https://cdn.7tv.app/emote/01G6REDHHR00068806HB3KD81P/4x.gif',
            'https://cdn.7tv.app/emote/01F6NPEJT0000B70V1XA8MNBC9/4x.gif',
            'https://cdn.7tv.app/emote/01G0ZB3JV800024N350XHCCTP7/4x.gif',
            'https://cdn.7tv.app/emote/01FZZFN3X00002BTTQTQ8NCGXR/4x.gif',
            'https://cdn.7tv.app/emote/01H0405680000AJFXTYVX2PNJ7/4x.gif',
            'https://cdn.7tv.app/emote/01F6W8904G0008ZF14F6H9W2RD/4x.gif',
            'https://cdn.7tv.app/emote/01G5HYMAZ00008G3QBPB7AVT10/4x.gif',
            'https://cdn.7tv.app/emote/01H05KSN50000FYS5SC9CHDQJ3/4x.png',]
        document.querySelector('.PollFrame').innerHTML = ''
        var answersObj = ''
        polling.answers.forEach((ans, indx) => {
            answersObj += `<div style="transform: translate(0px, ${10*(indx+1)}px);" class="answerBody" id="answer${indx}">${ans} <img class="meme" src="${ur[Math.floor(Math.random() * 9)]}"></div>`
        })
        document.querySelector('.PollFrame').innerHTML = `
        <div class="Question">${polling.question}</div>
        <div class="answers">${answersObj}</div>
        <div class="Counter">${polling.num}/${poll.length}</div>
        <div class="Alerts"></div>
        <div class="NextButton buttons">Далее</div>
        `
        document.querySelectorAll('.answerBody').forEach((answer, index) => {
            answer.addEventListener('click', () => {
                if (answer.getAttribute("chosed") != 1){
                    polling.answers.forEach((an, is) => {
                        document.getElementById(`answer${is}`).setAttribute("chosed", 0)
                        document.getElementById(`answer${is}`).classList.remove('chosed')
                    })
                    answer.setAttribute("chosed", 1)
                    answer.classList.add('chosed')
                    user.que[number].answer = index
                    if (document.querySelector('.Alerts').innerHTML != ''){
                        document.querySelector('.Alerts').innerHTML = ''
                    }
                }
                else{
                    answer.setAttribute("chosed", 0)
                    answer.classList.remove('chosed')
                    user.que[number].answer = -1
                }
            })
        })

        document.querySelector('.NextButton').addEventListener('click', ()=>{
            if(user.que[number].answer != -1){
                user.total[user.que[number].answer].value += 1
                questioner(number+1, user)
            }
            else{
                Alerts('выберите вариант ответа')
            }
        })
    }
    else{
        var as = ``
        var G = 0
        var e = 0
        var i = 0
        var s = 0
        console.log(user.total)
        user.total.forEach((v, h) => {
            if (checkID(v.name) == "Гуманитарные профессии"){
                G += v.value
            }
            if (checkID(v.name) == "Естественные науки"){
                e += v.value
            }
            if (checkID(v.name) == "Информационные профессии"){
                i += v.value
            }
            if (checkID(v.name) == "Сфера обслуживания"){
                s += v.value
            }
        })
        if (G == Math.max(G, e, i, s)){
            as = `<div class="results">Гуманитарные профессии</div>`
        }
        if (e == Math.max(G, e, i, s)){
            as = `<div class="results">Естественные науки</div>`
        }
        if (i == Math.max(G, e, i, s)){
            as = `<div class="results">Информационные профессии</div>`
        }
        if (s == Math.max(G, e, i, s)){
            as = `<div class="results">Сфера обслуживания</div>`
        }
        document.querySelector('.PollFrame').innerHTML = as + "<div class='recommendation'>Тебе стоит почитать про это направление профессий, чтобы определить, точно ли это твоё призвание.</div>"
        document.querySelector('.main').innerHTML += `<div class="read_more buttons">Узнать больше</div>`
        document.querySelector('.main').innerHTML += `<div class="start_button buttons">Ещё раз</div>`
        document.querySelector('.start_button').addEventListener('click', () => {startPoll()})
        document.querySelector('.read_more').addEventListener('click', () => {open("/ProfOreintation/ComparsionPage.html", "_top")})
    }
}