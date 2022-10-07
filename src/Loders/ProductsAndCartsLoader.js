import { getStoredDb } from "../utilities/fakedb";

export const ProductsAndCartsLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const saveCart = getStoredDb();
    const storedCart = [];
    // console.log(saveCart)
    for (const id in saveCart) {
        // console.log(id)
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct)

        }
        // console.log(storedCart)
    }


return {products, storedCart};

}