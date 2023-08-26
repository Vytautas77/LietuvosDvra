const productsWrapper = document.getElementById('productsWrapper')


const productCard =(product)=>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'cardWrapper');

    const imgWrapper = document.createElement('img')
    imgWrapper.setAttribute('class', 'imgWrapper')
    imgWrapper.src = product.image
    const titleWrapper = document.createElement('h3')
    titleWrapper.innerHTML = product.title
    const priceWrapper = document.createElement('h1')
    priceWrapper.setAttribute('class', 'priceWrapper')
    priceWrapper.innerHTML = `&#x20AC  ${product.price}`
    
    wrapper.append(imgWrapper, titleWrapper, priceWrapper)
    return wrapper
}

const getProducts = async()=>{
    const response = await fetch('https://64e9d224bf99bdcc8e66ff66.mockapi.io/product/')
    const products = await response.json();
    products.forEach((product) => {
        const card = productCard(product)
        productsWrapper.append(card)
        
    });
}
getProducts()