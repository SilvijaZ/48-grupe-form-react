import { useState } from 'react';
import style from './RegisterMyForm.module.css';


export function RegisterMyForm(){


    const [username, setUsername] = useState(''); // value nurodyti reiksme, pradine reiksme - tuscias tekstas, po to irasysi teksta ir us atnaujinama reiksme, bus irasytas tekstas.
    const [usernameErr, setUsernameErr] = useState('');

    // onChenge pagauname atnaujinta reiksme:

    function usernameChange(e){
        setUsername(e.target.value); // konsoleje istraukia reiksme, bet nerasys i inputa. Reikia prirasyti setUsername nustatyti, kad galetai rasyti text
        //console.log(e) syntheticBaseEvent objektas
    }

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    function emailChange(e){
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    

    function passwordChange(e){
        setPassword(e.target.value);
    }

    const [repeatpassword, setPasswordRepeat] = useState('');


    function repeatPasswordChange(e){
        setPasswordRepeat(e.target.value);
    }


    function isValidUsername(text){
        if(text.length < 1){
            return 'per trumpas';  // klaidos pranesimas pateikti vartotojui
        }
        if(text.length > 20){
            return 'per ilgas';
        }
        return true;
        }

        // a@b.lt 6 simboliai
        function isValidEmail(text){
        if(text.length < 6){
            return'per trumpas'; 
        }

        //firstname.lastname@padalinys.firma.com
        if(text.length > 50){
            return 'per ilgas';
        }


        //////////////////////////////////

        if(!text.includes('@')){
            return 'Reikia įrašyti @ simbolį';
        }

        if(text.includes(' ')){
            return 'Negali būti tarpų';
        }

        const forbiddenSymbols = ['.', ',', '!', '?', '@', '-', '_'];
        if (forbiddenSymbols.some(symbol => text.startsWith(symbol))) {
            return 'Negalima rašyti adreso pradžioje įvairių simbolių';
        }    

        // if(text.includes(/^[^\s@]+$/)){
        //     return 'Negali būti tarpų po ir prieš @ simbolį';
        // }

         const allowedSymbols = [',', '!', '?', '-', '_', '(', ')', '*', '+', '/'];
        if (!text.split('@')[0].split('.').every(part => allowedSymbols.includes(part))) {
            return 'Adrese negali būti įvairių simbolių: , ! ? - _ * / +';
        }

        const dotCount = (text.match(/\./g)).length;
        if (dotCount == 2) {
            return 'Reikia nauodti bent du taškus';
        }


        const forbiddenNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        if (forbiddenNumbers.some(number => text.startsWith(number))) {
            return 'Adreso pradžioje negali būti skaičių';
        }

    
        if(!text.endsWith('.lt') && !text.endsWith('.com')){
            return 'Pabaigoje galima tik įrašyti .lt arba .com'
        }

        return true;
    }

    function isValidPassword(text){
        if(text.length > 8){
            return 'Slaptažodis turi turėti tik 8 simbolius';
        }

        if(!/[A-Z]/.test(text)){
            return 'Slaptažodyje turi būti bent viena didžioji raidė';
        }
       
        if(!/d/.test(text)){
            return 'Slaptažodyje turi būti bent vienas skaičius';
        }

        return true;
    }

    function FormSubmit(e){
        e.preventDefault();

        // console.log(username);
        // console.log(email);
        // console.log(password);
        // console.log(repeatpassword);

        // likvidacijos:

        const usernameErrValue = isValidUsername(username); // koks rezultatas
        const emailErrValue = isValidEmail(email);
        const passwordErrValue = isValidPassword(password);

        let isAllFromValid = true;  // ar visa forma yra validi, tai siunciat

        if(isValidUsername(username) !== true){ // jei grizta ne true, vadinasi kazkur klaida yra ir tada error atspausdinsim
            isAllFromValid = false;  // tikrina klaidu, jei vienas pasigauna klaida joje, ir pakeicia i false, atspausdins konsoleje, taip sustabdo nuo visa info nuo issiuntimo o dabar tikrins su false, ar yra teisinga info
            setUsernameErr(usernameErrValue);  // ismesti klaidos pranesima
        } else{
            setUsernameErr(''); // tuscias tekstas, nereikia rodyti kalidos pranesimo, jei trumpas, jei ilgas ir turi buti tuscias tekstas...
        }

        if(isValidEmail(email) !== true){
            isAllFromValid = false;
            setEmailErr(emailErrValue);
        } else{
            setEmailErr('');
        }

        if(isValidPassword(password) !== true){
            isAllFromValid = false;
            setPasswordErr(passwordErrValue);
        } else{
            setPasswordErr('');
        }

        if(password !== repeatpassword){
            isAllFromValid = false;
            setPasswordErr('blogas repeat password');
        } else{
            setPasswordErr('');
        }

        if(isAllFromValid){
            console.log('viskas gerai, siunciam info i serveri')
        }
        
    }

    return (
        <form onSubmit={FormSubmit} className={style.form} >
            <div className={style.div}>
                <label className={style.label} htmlFor="">Username</label>
                <input className={style.input} onChange={usernameChange} type="text" value={username} placeholder="Eg. John" />
                {usernameErr.length === 0 ? null : <p className={style.error}>{usernameErr}</p>}  
                 {/* jei yra tuscias tekstas ispiesti joki elememnta null, o jie yra klaida ispiesti klaidos pranesima */}
            </div>
            <div className={style.div}>
                <label className={style.label} htmlFor="">Email</label>
                <input className={style.input} onChange={emailChange} type="email" value={email} placeholder="Eg. John@cena.com" />
                {emailErr.length === 0 ? null : <p className={style.error}>{emailErr}</p>}  
            </div>
            <div className={style.div}>
                <label className={style.label} htmlFor="">Password</label>
                <input className={style.input} onChange={passwordChange} type="password" value={password} placeholder="enter your password" />
                {passwordErr.length === 0 ? null : <p className={style.error}>{passwordErr}</p>}
            </div>
            <div className={style.div}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input className={style.input} onChange={repeatPasswordChange} type="password" value={repeatpassword} placeholder="enter your password" />
                {passwordErr.length === 0 ? null : <p className={style.error}>{repeatpassword}</p>}
            </div>
            <div className={style.div}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}



// Pabaigti, ir likvidacijas parasyti su email padaryti min, max neuztenka, reikia parasyti 5 scenarijus padėti žmogui atpazintu kokia yra klaida rasant pasto adresa kaip grazinti zinute