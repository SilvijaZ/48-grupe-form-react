/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';
import { urlName } from '../../urlName';

export function VegyItem({data}){
    const { name, price, unit, href } = data;
    
    const [count, setCount] = useState(1);

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
            <span className={style.vegyTitle}>{name}({price}&euro;/{unit})</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count} {unit}</span>
                <button onClick={handleCountPlius} className={style.btn}>+</button>
            </div>

            <div className={style.controls}>
                <span className={style.count}>{getTotalPrice()}</span>
            </div>

            <Link to={'/vegetables/' + urlName(href)}>Read more</Link>
        </li>
    );
}

