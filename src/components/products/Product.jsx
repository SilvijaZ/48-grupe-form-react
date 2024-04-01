/* eslint-disable react/prop-types */


import style from './Products.module.css';



export function Product({ data }){

    const VegetableStyle = style.status + ' ' + (data.isVegetables ? style.isVegy : style.isNotVegy);
    
    return(  
            <li className={style.product}>
                <h2 className={style.name}>{data.name}</h2>
                <p className={style.price}>Price: {data.price}</p>
                <p className={style.info}>Unit: {data.unit}</p>
                <p className={VegetableStyle}>Is your product is a Vegetable? {data.isVegetables ? 'true' : 'false'}</p>
                <img src={data.image} alt={data.name} />
            </li>
    );
}
