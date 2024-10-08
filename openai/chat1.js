
OPENAPI_KEY = ""
function talk() {
    let squestion = document.getElementById('question').value;
    let smodel = document.getElementById('model').value;
    let data = {
        model: smodel,
        messages: [
            {
                role: "user",
                content: squestion
            }
        ]
    };

    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers: {
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response) {
        let answer = response.choices[0].message.content;
        document.getElementById('ans').innerText = answer;
        console.log(answer);
    }).fail(function(error) {
        console.error("Error:", error);
        console.log(error)
        errormsg = error.status + ':' + error.responseJSON.error.code + '-' + error.responseJSON.error.message
        alert(errormsg);
    });
}

function draw() {
    let squestion = document.getElementById('question').value;
    let data = {
        prompt: squestion,
        n:2,
        size:"512x512"
    };

    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/images/generations",
        headers: {
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response) {
        console.log(response)
        gimage.src = response.data[0].url
        gimage2.src = response.data[1].url
    }).fail(function(error) {
        console.error("Error:", error);
        console.log(error)
        errormsg = error.status + ':' + error.responseJSON.error.code + '-' + error.responseJSON.error.message
        alert(errormsg);
    });
}