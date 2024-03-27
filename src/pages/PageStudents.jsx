import { useEffect, useState } from "react";
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";


export function PageStudents(){

    const [count, setCount] = useState(0);
    const [studentData, setStudentData] = useState([]);

    // const studentsData = [];
    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-form-react/main/public/students.json';

    // is duomenu istraukia info:
    // const result = await fetch(dataUrl);
    // const data = await result.json();
    // console.log(data);
    // console.log(data.students);
    // console.log(data.students.length);

    useEffect(() => {

        console.log('effect...')


        fetch(dataUrl)
            .then(respond => respond.json())
            .then(data => setStudentData(data))
            .catch(e => console.error(e))

        // const result = await fetch(dataUrl);
        // const data = await result.json();
        // setStudentData(data);
    }, [count]);


    return (
        <>
            <h1 className="page-title">
                Students
                <button onClick={ ()=> setCount(count + 1) }>{count}</button>
            </h1>
            <p className="page-description">Students attending this class:</p>
            {studentData.length === 0 ? <StudentsNoData /> : <StudentList />}
            {/* <StudentsNoData />
            <StudentList /> */}
        </>
    );
}


// jeigu nebus masyve duomenu, tai grazins nera duomenu, o kitas grazins duomenis StudentList