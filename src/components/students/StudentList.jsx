/* eslint-disable react/prop-types */
import { Student } from "./Student";
import style from "./Students.module.css";

export function StudentList({ data }){
    return (
        <ul className={style.studentList}>
            {data.map((student, index) => <Student key={index} data={student} />)}
        </ul>
    );
}
// key={index} rasome, kad atpazintu kiekvieno studento duomenis
// galėtume naudoti ir id