import { useParams } from 'react-router-dom';
import { data } from '../components/data/Data';


export function PageVegetablesInner(){

    const {id} = useParams();


    const filterItems = data.filter(vegy => vegy.href === id);

    return (
        <>
            <h1>Apie produkta: {data.id}</h1>
            {filterItems.map((data, index) => <div key={index}>
                <p>Dominancio produkto pavadinimas yra: {data.name}</p>
                <p>Dominancio produkto kaina yra: {data.price}&euro;/{data.unit}</p>
                <p>Dominancio produkto vienetas yra: {data.unit}</p>
            </div>)}
        </>
    );
}