import { useEffect, useState } from "react";
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";


// eslint-disable-next-line no-unused-vars
export function PageStudents(data){

    const [count, setCount] = useState(0);
    const [studentData, setStudentData] = useState([]); 
    // data kur bus laikoma info masyve, ir funkcija su kuria informacija atnaujinam, ir atnaujins tuscio masyvo duomenis, ir uzpildysime atsiustais duomenimis.


    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-form-react/main/public/students.json';


    // const studentsData = [];  
    /*turi buti data masyvas, bet turinys yra tuscias dabar, kaip gauti informacija,
    tureti adresa url, nes sedi duomenys json.
    fetch() (atnesti) duomenu atsiuntimas per tinkla - idedam url adresa. i console atspausdina Promise objekta, pending - procese... 
    await (islaukti) kai fetch pabaigs savo darba, tada gausim rezultata, ir funkcija prirasom async. Gaunam response i console. Duomenys yra tam response, ir prirasome await ir json metoda. Gaunam duomenu objekta.*/

    // Naudoti Javascripte :
    // is duomenu istraukia info:
    // const result = await fetch(dataUrl);
    // const data = await result.json();
    // console.log(data);
    // console.log(data.students);
    // console.log(data.students.length); jei masyvas istrauki masyvo ilgi

    useEffect(() => {

        // useEffect funkcija leidzia savyje atsisiusti duomenis. 
        console.log('effect...')


        fetch(dataUrl)  // vykdom internetine uzklausa, promise
            .then(response => response.json()) // json is teksto pavercia, then metode rasome funkcija.
            .then(data => setStudentData(data.students)) // gaunam duomenis, atnaujinam masyva
            .catch(e => console.error(e)) // pagauna bagus, yra paskutnis ir vienas. objektas

            // const result = await fetch(dataUrl);
            // const data = await result.json();
            // setStudentData(data);
    }, []); // dedam gale masyva, kad panaudoti useEffect viena karta po pirminio komponento ispiesimo, jeigu yra tuscias i jokius kinatamuju pasikeitimus nereguos.


    return (
        <>
            <h1 className="page-title">
                Students
                <button onClick={()=> setCount(count + 1)}>{count}</button>
            </h1>
            <p className="page-description">Students attending this class:</p>
            {studentData.length === 0 ? <StudentsNoData /> : <StudentList data={studentData} />}
            {/* <StudentsNoData />   parodo ar turi duomenu ar nera duomenu, tai naudojam ternary
            <StudentList /> */}
        </>
    );
}


// Javascripte kaip naudojamas try catch data atsiuntimas:

// async function piesti(){
//     const url = 'http';
//     let response = null;
//     let data = null;

//     try {
//     response = await fetch(url);
//     } catch (error){
//         return 'Error: .... ';
//     }

//     /*
//     {
//         "students": []  žiurima ar validus url
//     } 
//     */

//     try {
//     data = await response.json();
//     } catch (error){
//         return 'Error: .... ';
//     }

//     console.log(data);
//     return 'OK ....';
// }

