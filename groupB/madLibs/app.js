function libIt() {
    let storyDiv= document.getElementById("story");
    let person= document.getElementById("person").value;
    let adjective= document.getElementById("adjective").value;
    let noun= document.getElementById("noun").value;

    storyDiv.innerHTML= (`${person} fell off a ${adjective} ${noun} it's funny right?!?`);
}

const button= document.getElementById("lib-button");
button.addEventListener('click', libIt);