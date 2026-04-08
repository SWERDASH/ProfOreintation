
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
        question: "Вопрос 1",
        answers:["Сфера обслуживания", "Естествознание", "Гуманитарии", "Информатика"]
    },
    {
        num: 2,
        question: "Вопрос 2",
        answers:["Сфера обслуживания", "Естествознание", "Гуманитарии", "Информатика"]
    },
    {
        num: 3,
        question: "Вопрос 3",
        answers:["Сфера обслуживания", "Естествознание", "Гуманитарии", "Информатика"]
    },
    {
        num: 4,
        question: "Вопрос 4",
        answers:["Сфера обслуживания", "Естествознание", "Гуманитарии", "Информатика"]
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
        user.total.forEach((v, i) => {
            as += `<div class="results">${v.name}: ${v.value}</div>`
        })
        document.querySelector('.PollFrame').innerHTML = as
        document.querySelector('.main').innerHTML += `<div class="start_button buttons">Ещё раз</div>`
        document.querySelector('.start_button').addEventListener('click', () => {startPoll()})
    }
}