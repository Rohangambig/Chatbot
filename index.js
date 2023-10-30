
//  This is for toggling the container

// const ChatbotToggles = document.querySelector('.chatbot-toggle');
// const CLose = document.querySelector('#Close')

// Close.addEventListener('click',()=>{
//     document.body.classList.remove('show-chatbot')
// })

// ChatbotToggles.addEventListener('click',()=>
//     document.body.classList.toggle('show-chatbot')
// );

const sendChatbtn = document.querySelector('.show-chatbot .chat_input #send_btn');
const chatInput = document.querySelector('.chat_input textarea')
const chatbox= document.querySelector('.chatbox')


let p;
const createChatLi = (message,classname) =>{
    let chatLi = document.createElement('li');
    if(classname === 'ChatOutgoing')
    {
        p = document.createElement('p');
        p.textContent = message;
        chatLi.classList.add(classname);
        chatLi.appendChild(p);
        chatbox.appendChild(chatLi);
    }
    else
    {
        p = document.createElement('p');
        p.textContent = message;
        chatLi.classList.add(classname);
        chatLi.appendChild(p);
        chatbox.appendChild(chatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
    }

}

//  API
const API_KEY = "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";
let usermessage;

const generateResponse = () => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const request = {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "user",
                "content": usermessage
              }
            ]
          })
    }
    console.log(usermessage)
    fetch(API_URL,request).then(res => res.json()).then(data =>{
        console.log(data)
        // createChatLi(data.choices[0].message.content,'ChatIncoming');
        p.textContent = data.choices[0].message.content;
    }).catch(()=>{
        p.textContent = "Oops ! Something went wrong , please try again.";
    });
}

sendChatbtn.addEventListener("click", () => {
    usermessage = chatInput.value.trim();
    if(!usermessage) return;

    createChatLi(usermessage,"ChatOutgoing");
    chatbox.scrollTo(0,chatbox.scrollHeight);
    chatInput.value = '';
    
    setTimeout(()=>{
        createChatLi('Thinking...',"ChatIncoming");
        generateResponse();
    },500)

});

//  scrolll automatically
