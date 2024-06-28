let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer")
let userInputEl = document.getElementById("userInput")
let sendMsgBtnEl = document.getElementById("sendMsgBtn");

function userChat(userInputValue) {
    let divUserConatinerEl = document.createElement("div")
    divUserConatinerEl.classList.add("msg-to-chatbot-container")
    chatContainerEl.appendChild(divUserConatinerEl)

    let spanUserEl = document.createElement("span")
    spanUserEl.textContent = userInputValue
    spanUserEl.classList.add("msg-to-chatbot")
    divUserConatinerEl.appendChild(spanUserEl)
}

function chatBot(chatBotValue) {
    let divUserConatinerEl = document.createElement("div")
    divUserConatinerEl.classList.add("msg-from-chatbot-container")
    chatContainerEl.appendChild(divUserConatinerEl)

    let spanUserEl = document.createElement("span")
    spanUserEl.textContent = chatBotValue
    spanUserEl.classList.add("msg-from-chatbot")
    divUserConatinerEl.appendChild(spanUserEl)
}

sendMsgBtnEl.addEventListener("click", function() {
    if (userInputEl.value !== "") {
        userChat(userInputEl.value)
        let chatbotMsgListLen = chatbotMsgList.length
        let chatbotMsgListIndex = Math.ceil(Math.random() * chatbotMsgListLen)
        chatBot(chatbotMsgList[chatbotMsgListIndex - 1])
        userInputEl.value = ""
    }
})