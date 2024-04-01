/* eslint-disable react/prop-types */
import style from "./Students.module.css";


export function Student({ data }){
    const valideMarks = data.marks
        .filter(n => typeof n === 'number') // ar n yra skaicius
        .filter(n => n > 0)  // ar n yra teigiami skc
        .filter(n => n < 11)  // ar n maziau uz 11, nes masyve marks iki 10 max
        .filter(n => n % 1 === 0)  // ar n yra sveikasis skaicius
        .filter(n => n === Math.floor(n)) // 4.5 === 4.5 => 4 apvalinam, false
        .filter(n => Number.isInteger(n)); // ar reikšmė yra duomenų tipo skaičiaus sveikasis skaičius.

        // filter( n => typeof n === 'number' && n > 0 && n < 11 && Number.isInteger(n))

    const marksSum = valideMarks.reduce((t, n)=> t + n, 0);  // sum
    const marksAverage = marksSum / valideMarks.length; // total / length

    const marriageStyle = style.status + ' ' + (data.isMarried ? style.married :  style.NotMarried);

   

    return (
        <li className={style.student}>
            <h2 className={style.name}>{data.name} ({data.age} years) </h2>
            <p className={marriageStyle}>Marriage status - is {data.isMarried ? '' :  ' not '}married</p>
            {/* <p className={style.status + ' ' + style.married}>Marriage status - is (not) married</p> */}
            {/* <p className={style.status + ' ' + style.NotMarried}>Marriage status - is (not) married</p> */}
            <p className={style.info}>Marks: {valideMarks.join(',')}</p>
            <p className={style.info}>Marks count: {valideMarks.length}</p>
            <p className={style.info}>Marks average: {marksAverage.toFixed(1)}</p>
        </li>
    );
}