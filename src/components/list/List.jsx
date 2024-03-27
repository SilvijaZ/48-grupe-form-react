
import style from './List.module.css';
import { VegyItem } from './VegyItem';
import { data } from '../data/Data';


export function List(){
    
    
//     const vegyList = [];
//     for(const vegy of data){
//         vegyList.push(<li>Vegetable...</li>);
//     }
//     const vegyList = data.map(vegy => <li>Vegy....</li>);
     
    return(
        <>
            <ul className={style.vegetables}>
                {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
                {data.map((vegy, index) => <VegyItem key={index} data={vegy} />)}
            </ul>
        </>
    );
}


// const [a, b] = [10, 2, 8, 6]
// galim pasiimti a ir b
// a = 10
// b = 2

/* 
const x = useState()
const a = x[0]
const b = x[1] 
*/