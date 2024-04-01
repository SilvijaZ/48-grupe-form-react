/* eslint-disable react/prop-types */
import { Product } from "./Product";
import style from './Products.module.css';



export function ProductList({ data }){
    return (
        <ul className={style.productList}>
            {data.map((product, index) => <Product key={index} data={product} image={data.image}/>)}
        </ul>
    );
}