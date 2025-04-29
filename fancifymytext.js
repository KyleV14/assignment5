alert("Hello, world!");

function bigger() {
    let textArea = document.getElementById("text");
    textArea.style.fontSize = "24pt";
}

function changeStyle(){
    let textArea = document.getElementById("text");

    if (document.getElementById("fancy").checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked){
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooit() {
    let textArea = document.getElementById("text");

    let thisText = textArea.value.toUpperCase();

    let text = thisText.split("."); //array of splitted words

    for(let i = 0; i < text.length-1; i++){        //for loop to go through text

        //eachWord is an array 
        let eachWord = text[i].trim().split(" "); //get rids of whitespace so that split won't treat as word

        if (eachWord.length > 0) {
            eachWord[eachWord.length-1] += "-MOO";      //targets the last word in eachWord array
        }

        text[i] = eachWord.join(" ");
    }

    textArea.value = text.join(". ");

}
