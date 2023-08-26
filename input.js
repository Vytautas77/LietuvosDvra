//const inputsInfo = document.getElementById('inputsInfo')
const infoBTN = document.getElementById('infoBTN')
const responseWraper = document.getElementById('responseWraper')

const inputsInfo = ()=>{
    const inputTitle = document.getElementById('inputTitle').value
    const inputPrice = document.getElementById('inputPrice').value
    const inputImg = document.getElementById('inputImg').value

    const inputProduct = {
        image : inputImg,
        title : inputTitle,
        price : inputPrice
    }
    return inputProduct
}

infoBTN.addEventListener('click', async ()=>{
    const inputProduct = inputsInfo();
    const response = await fetch('https://64e9d224bf99bdcc8e66ff66.mockapi.io/product',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputProduct)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    })

})