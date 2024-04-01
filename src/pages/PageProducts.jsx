/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ProductList } from "../components/products/ProductList";
import { ProductsNoFoundData } from "../components/products/ProductsNoFoundData";

export function PageProducts(data){

    const [productData, setProductData] = useState([]);

    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-form-react/main/public/products.json';

    useEffect(()=>{

        fetch(dataUrl)
            .then(respond => respond.json())
            .then(data => setProductData(data.products))
            .catch(e => console.error(e))

    }, [])

    return(
        <>
            <h1 className="page-title">Products</h1>
            {productData.length === 0 ? <ProductsNoFoundData /> : <ProductList data={productData} />}
        </>
    );
}