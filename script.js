var questionEl=document.querySelector('#question-screen')
questionEl.style.display="none"
var startbuttonEl=document.querySelector('#start-button')
var startscreenEl=document.querySelector( '#start-screen')
var quizQuestionEl = document.querySelector("#question")

var quizquestions=[
    {
        question:"what colour is the grass!!!?",
        answers:[ 'purple','blue','black','green' ],
        correctanswer:"green"
    },
    {
        question:"what colour is the grass?",
        answers:[ 'purple','blue','black','green' ],
        correctanswer:"green"
    },
    {
        question:"what colour is the water?",
        answers:[ 'purple','blue','black','green' ],
        correctanswer:"blue"
    },
    {
        question:"what clour is the sun?",
        answers:[ 'purple','blue','yelllow','green' ],
        correctanswer:"yellow"
    },
    {
        question:"what colour is a tennis ball?",
        answers:[ 'purple','white','black','green' ],
        correctanswer:"white"
    },
]
var questionindex=0
quizquestions[questionindex]












function start( ) {
startscreenEl.style.display='none'
questionEl.style.display="block"
 
var currentQuestion = quizquestions[questionindex]
quizQuestionEl.textContent = currentQuestion.question

}



startbuttonEl.addEventListener('click',start)



