// Language points
const languagePoints = {
  "JavaScript": 0,
  "Python": 0,
  "Java": 0,
  "C++": 0
};

// Get Questions
async function getQuestions() {
  const response = await fetch("questions.json")
  const data = await response.json()
  return data
}
let data = []


let questionNumber = 0
let questionTitle = document.getElementById("question-title")
let questionAnswers = document.getElementById("question-answers-list")
let infoQuestion = document.getElementById("info-questions")

// Sayfa yüklenince ilk soruyu getiriyoruz.
addEventListener("load", async () => {
  data = await getQuestions()
  infoQuestion.innerHTML = `Soru ${questionNumber + 1} / ${data.length}`
  questionTitle.innerHTML = data[questionNumber].question
  for (let i = 0; i < data[questionNumber].answers.length; i++) {
    questionAnswers.innerHTML += `
          <label for="${i}" id="answers${i}" class="step_1 animate__animated animate__fadeInRight animate_25ms position-relative rounded-pill text-start text-white" onclick="selectAnswers(${i})">
          ${data[questionNumber].answers[i]["answer"]}
           <input id="${i}" type="radio" name="stp_1_select_option" value=" Javascript : ${data[questionNumber].answers[i]["points"]["JavaScript"]} , Python : ${data[questionNumber].answers[i]["points"]["Python"]} , Java : ${data[questionNumber].answers[i]["points"]["Java"]} , C++ : ${data[questionNumber].answers[i]["points"]["C++"]} ">
        </label>
          `
  }
  questionNumber++
})

// Select answers function
let selectAnswersNum = 9
function selectAnswers(id) {
  if (selectAnswersNum == 9) {
    selectId = "answers" + id
    let selectAnswers = document.getElementById(selectId)
    selectAnswers.classList.add("active")
    selectAnswersNum = id
  } else {
    selectId = "answers" + selectAnswersNum
    let selectAnswers = document.getElementById(selectId)
    selectAnswers?.classList?.remove("active")
    selectAnswersNum = id
    selectId = "answers" + selectAnswersNum
    selectAnswers = document.getElementById(selectId)
    selectAnswers.classList.add("active")
  }
}

// Next question function
let nextQuestion = document.getElementById("next-question")
nextQuestion.addEventListener("click", async () => {
  if (nextQuestion.classList.contains("finish")) {
    console.log(questionNumber, "QN")
    console.log("son soru")
    // Evaluate answers points function languagePoints add
    evaluatePoints(0)
    console.log(languagePoints);
    languagePointsFunction()
    return
  }


  function checkForActiveClass(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].classList.contains("active")) {
        return true;
      }
    }
    return false;
  }


  let questionAnswersChild = document.getElementById("question-answers-list").children;
  let isActive = checkForActiveClass(questionAnswersChild);
  if (isActive) {
    if (questionNumber >= data.length - 1) {
      // Next question
      infoQuestion.innerHTML = `Soru ${questionNumber + 1} / ${data.length}`
      questionTitle.innerHTML = data[questionNumber].question
      questionAnswers.innerHTML = ""
      for (let i = 0; i < data[questionNumber].answers.length; i++) {
        questionAnswers.innerHTML += `
              <label for="${i}" id="answers${i}" class="step_1 animate__animated animate__fadeInRight animate_25ms position-relative rounded-pill text-start text-white" onclick="selectAnswers(${i})">
              ${data[questionNumber].answers[i]["answer"]}
               <input id="${i}" type="radio" name="stp_1_select_option" value=" Javascript : ${data[questionNumber].answers[i]["points"]["JavaScript"]} , Python : ${data[questionNumber].answers[i]["points"]["Python"]} , Java : ${data[questionNumber].answers[i]["points"]["Java"]} , C++ : ${data[questionNumber].answers[i]["points"]["C++"]} ">
            </label>
              `
      }
      console.log(selectAnswersNum, "SELECTANSWERSNUM", data[questionNumber - 1])
      // Evaluate answers points function languagePoints add
      evaluatePoints()
      let button = document.getElementById("next-question")
      button.classList.add("finish")
      button.innerHTML = "TESTİ BİTİR"

    }
    else {

      // Next question
      infoQuestion.innerHTML = `Soru ${questionNumber + 1} / ${data.length}`
      questionTitle.innerHTML = data[questionNumber].question
      questionAnswers.innerHTML = ""
      for (let i = 0; i < data[questionNumber].answers.length; i++) {
        questionAnswers.innerHTML += `
              <label for="${i}" id="answers${i}" class="step_1 animate__animated animate__fadeInRight animate_25ms position-relative rounded-pill text-start text-white" onclick="selectAnswers(${i})">
              ${data[questionNumber].answers[i]["answer"]}
               <input id="${i}" type="radio" name="stp_1_select_option" value=" Javascript : ${data[questionNumber].answers[i]["points"]["JavaScript"]} , Python : ${data[questionNumber].answers[i]["points"]["Python"]} , Java : ${data[questionNumber].answers[i]["points"]["Java"]} , C++ : ${data[questionNumber].answers[i]["points"]["C++"]} ">
            </label>
              `
      }
      console.log(selectAnswersNum, "SELECTANSWERSNUM", data[questionNumber - 1])
      // Evaluate answers points function languagePoints add
      evaluatePoints()
      console.log(languagePoints);
      console.log(questionNumber, "QN2")
      questionNumber++
    }
  } else {
    alert("Lütfen bir cevap seçin.")
  }
})

// Finish button
let finishButton = document.getElementsByClassName("finish")


// Language points function
function languagePointsFunction() {
  let languagePointsArray = Object.values(languagePoints)
  let languagePointsMax = Math.max(...languagePointsArray)
  let languagePointsMaxIndex = languagePointsArray.indexOf(languagePointsMax)
  let languagePointsMaxName = Object.keys(languagePoints)[languagePointsMaxIndex]
  window.location.href = `/page/${languagePointsMaxName}.html`
}

function evaluatePoints(num = 1) {
  languagePoints["JavaScript"] += parseInt(data[questionNumber - num].answers[selectAnswersNum]["points"]["JavaScript"])
  languagePoints["Python"] += parseInt(data[questionNumber - num].answers[selectAnswersNum]["points"]["Python"])
  languagePoints["Java"] += parseInt(data[questionNumber - num].answers[selectAnswersNum]["points"]["Java"])
  languagePoints["C++"] += parseInt(data[questionNumber - num].answers[selectAnswersNum]["points"]["C++"])
}