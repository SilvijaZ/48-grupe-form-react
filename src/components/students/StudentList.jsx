import { Student } from "./Student";
import style from "./Students.module.css";

export function StudentList(){
    return (
        <ul className={style.studentList}>
            <Student />
            <Student />
            <Student />
            <Student />
        </ul>
    );
}