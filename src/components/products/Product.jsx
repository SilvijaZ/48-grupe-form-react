
// import { useEffect, useState } from 'react';
import style from './Products.module.css';



export function Product(){

    // const [productData, setProductData] = useState([]);

    // const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-form-react/main/public/products.json';

    // useEffect(()=>{

    //     fetch(dataUrl)
    //         .then(respond => respond.json())
    //         .then(data => setProductData(data))
    //         .catch(e => console.error(e))

    // }, [])
    
    return(
            <>
                {/* {productData.map((product, index) => */}
                    <li className={style.product}>
                        <h2 className={style.name}>Name</h2>
                        <p className={style.price}>Price</p>
                        <p className={style.info}>Unit</p>
                        <p className={style.info}>Checking product is vegetable or not is vegetable</p>
                    </li>
            </>
    );
}

