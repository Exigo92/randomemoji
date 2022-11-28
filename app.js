var btn = document.getElementById("btn");
    emoji = document.getElementById("emoji");

btn.addEventListener("click", getRandomEmoji);

function getRandomEmoji(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://emojihub.herokuapp.com/api/random", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            emoji.innerHTML = data.htmlCode[0];

           /* var output = `
            <div>
                <h2>${data.name}</h2>
                <h3>${data.category}</h3>
                <p>${data.htmlCode[0]}</p>
            </div>
            `;

           emoji.innerHTML = output;*/
        }
    }

    xhr.send();
}