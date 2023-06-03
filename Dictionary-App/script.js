
const dictonary=(word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ffd2a78430msh9f440cf75f43aa3p1b3842jsn1a7c61168e14',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(url,options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            wordHeading.innerHTML = "Here is the meaning of " + response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.");
        })

        .catch(err => console.log(err));
}
// searchinput
// searchbtn   

searchbtn.addEventListener("click", (e) => {
    // if somebody clicks on submit form page reloaded and submit form should not happen we will prevent the default behaviour
    e.preventDefault();
    // if somebody clicks this grab the value of input and call dictionary func
    dictonary(searchinput.value)
})