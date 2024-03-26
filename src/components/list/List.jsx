import style from './List.module.css';
import { VegyItem } from './VegyItem';



export function List(){

    const data = [
        { name: 'Pomidoras', price: 2.00, count: 0 },
        { name: 'Agurkas', price: 1.50, count: 0 },
        { name: 'Morka',  price: 0.89, count: 0 },
        { name: 'Svogunai', price: 1.02, count: 0 },
        { name: 'Paprika', price: 1.80, count: 0 },
    ];
    
    
//     const vegyList = [];
//     for(const vegy of data){
//         vegyList.push(<li>Vegetable...</li>);
//     }
//     const vegyList = data.map(vegy => <li>Vegy....</li>);
    
    return(
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {data.map((vegy, index) => <VegyItem key={index} name={vegy.name}  price={vegy.price} count={vegy.count} />)}
        </ul>
    );
}


/*
<N.D pakeisti masyvas turi buti is objektu, obejkte yra prekes pavadinimas, darzovės pavadinimas, ir jos turi matavimo vieneta, tai reiskia kilogramai arba vnt. kaina uz vieneta, ir atitinkamai kaina eurais.
parametrus visus pasiduodat i ta VegyItem ir priima visa info, priima pavadinimas, matavimo vieneta, kaina ir count keiciant jis turi automatikskai salia sone pasakyti lentele pasidayrti turimas kiekis ir total, kiek moketi uz bulves...
*/