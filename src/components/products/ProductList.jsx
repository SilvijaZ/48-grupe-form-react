import { Product } from "./Product";
import style from './Products.module.css';

export function ProductList(){
    return (
        <ul className={style.productList}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </ul>
    );
}