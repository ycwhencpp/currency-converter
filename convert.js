import {api_key} from "./api_key.js"


// fetching data from api 
const response = fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${api_key}`)
    .then( response =>  response.json())


// getting data for dropdwon

response.then( data =>{

    const currencies=Object.keys(data.rates)

    for(let i=0; i<currencies.length ;i++) {

       var option=document.createElement("option");
        option.value=option.text=currencies[i];
        document.querySelector("#currencies").add(option);

    }
 }).catch( error => console.log("error:",error));   




//making api request after submitting form

document.querySelector("form").onsubmit= ()=>{

    response.then( data => {

        const to_convert =document.querySelector("#currencies").value;
        
        // console.log(data.rates[to_convert])
        document.querySelector("#result").innerHTML= ` 1 Euro(EUR) is equal to ${data.rates[to_convert].toFixed(3)} ${to_convert}`

    }).catch( error => console.log("error:",error));

    //not submitting false
    return false
}; 