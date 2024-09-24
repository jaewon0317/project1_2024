OPENAPI_KEY = ""
smodel = "gpt-3.5-turbo"

function talk(){

    let squestion = document.getElementById('question').value;
    let smodel = document.getElementById('model').value;

    data ={
        model: smodel,
        messages: [
            {
                role: "user",
                content: squestion
            }
        ]
    }

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response.choices[0].message.content)
        alert()
    }).fail(

    )
    locationTitle = document.getElementById('ans');
    locationTitle.innerText = `${response.choices[0].message.content}`;
}

talk()
// chatgpt 카드 연결후 되는지 확인