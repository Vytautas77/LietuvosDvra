//const inputsInfo = document.getElementById('inputsInfo')
const infoBTN = document.getElementById('infoBTN')
const responseWraper = document.getElementById('responseWraper')
const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

const inputsInfo = ()=>{
    const inputTitle = document.getElementById('inputTitle').value
    const inputPrice = document.getElementById('inputPrice').value
    const inputImg = document.getElementById('inputImg').value

    if(!inputTitle){
        responseWraper.innerHTML = 'Laukelis "Įkelti pavadinimą" neįvestas!'
        throw new Error('Laukelis "Laukelis "Įkelti pavadinimą" neįvestas!"');
    }
    if(!inputPrice){
        responseWraper.innerHTML = 'Laukelis "Įkelti kainą" neįvestas!'
        throw new Error('Laukelis "Laukelis "Įkelti kainą" neįvestas!"');
    }
    if(!inputImg){
    responseWraper.innerHTML = 'Laukelis "Įkelti nuotrauką" neįvestas!'
        throw new Error('Laukelis "Laukelis "Įkelti nuotrauką" neįvestas!"');
    }
    if(!linkRegex.test(inputImg)){
        responseWraper.innerHTML = 'Neteisingas "Nuotraukos adresas" įvestis!'
        throw new Error('Neteisingas "Nuotraukos adresas" įvestis!');
    }
    const inputProduct = {
        image : inputImg,
        title : inputTitle,
        price : inputPrice
    }
    return inputProduct
}

infoBTN.addEventListener('click', async ()=>{
    const inputProduct = inputsInfo();
try{
    const response = await fetch('https://64e9d224bf99bdcc8e66ff66.mockapi.io/product',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputProduct)
    })
const data = await response.json();
    if(data){
        responseWraper.innerHTML = "Duomenys įkelti sėkmingai."
        setTimeout(()=>{
            window.location.replace("./index.html")
        },2000)
    }
}catch(err){
    responseWraper.innerHTML = "Duomenys įkelti NEsėkmingai."
}

})