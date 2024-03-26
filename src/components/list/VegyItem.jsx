/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';
import style from './List.module.css';

export function VegyItem(props){
    const { name, price } = props;
    
    const [count, setCount] = useState(0);

    const min = 0;
    const max = 20;


    function handleCountMinus(){
        if(count > min){
            setCount(count - 1)
        }

        // setCount(count - 1);
    }

    function handleCountPlius(){
        if(count < max){
            setCount(count + 1)
        }
        // setCount(count + 1);
    }

    function getTotalPrice() {
        return (count * price).toFixed(2);
      }

      

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{name}</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count + 'vnt'}</span>
                <button onClick={handleCountPlius} className={style.btn}>+</button>
            </div>
            <div className={style.controls}>
                <span className={style.count}>{price}</span>
                <span className={style.count}>{getTotalPrice() + 'Eur'}</span>
            </div>
        </li>
    );
}