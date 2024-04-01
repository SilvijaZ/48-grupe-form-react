
import { useState } from "react";
import style from "./RegisterForm.module.css";

export function RegisterForm(){

    const {username, setUsername} = useState('');
    const {usernameErr, setUsernameErr} = useState('');

    const {email, setEmail} = useState('');
    const {emailErr, setEmailErr} = useState('');

    const {password, setPassword} = useState('');
    // const {passwordErr, setPasswordErr} = useState('');

    const {repeatPassword, setRepeatPassword} = useState('');
    
    function handleUsernameChange(e){
        setUsername(e.target.value); // nuskaitom event.target.value ir leidzia rasyti input jei yra setUsername, nustatom
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleRepeatPasswordChange(e){
        setRepeatPassword(e.target.value);
    }

    function isValidUsername(text){
       if(text.length < 1){
            return 'per trumpas';
        }
        if(text.length > 20){
            return 'per ilgas';
        }

        return true;
    }

    function isValidEmail(text){
        if(text.length < 6){
            return 'per trumpas';
        }
        if(text.length > 50){
            return 'per ilgas';
        }
        return true;
    }

    // function isValidPassword(text){
    //     if(text.length < 50){
    //         return false;
    //     }
    //     return true;
    // }

    function handleFormSubmit(e){
        e.preventDefault();
        
        const usernameErrorValue = isValidUsername(username);
        let isAllFormValid = true;



        if(usernameErrorValue !== true){
            isAllFormValid = false;
            setUsernameErr(usernameErrorValue);
        } else {
            setUsernameErr('');
        }

        ///////////////////////////////////////////////////////

        const emailErrorValue = isValidEmail(email);

        if(emailErrorValue !== true){  // jei email value yra err tai false ir ismeta pranesima blogas email
            isAllFormValid = false;
            // console.log('blogas email');
            setEmailErr(emailErrorValue); // ?
        } else {
            setEmailErr('');   // ?
        }

        if(!isValidUsername(password)){
            isAllFormValid = false;
            console.log('blogas password');
        }

        if(password !== repeatPassword){
            isAllFormValid = false;
            console.log('blogas repeat password');
        }

        if(isAllFormValid){
            console.log('viskas gerai, siuncia info i serveri');
        }

        // console.log(username);
        // console.log(email);
        // console.log(password);
        // console.log(repeatPassword);
    }

    return (
        <form onSubmit={handleFormSubmit} className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Username</label>
                <input value={username} onChange={handleUsernameChange} className={style.input} type="text" placeholder="Eg. John" />
                <p className={style.error}>{usernameErr}</p>
                {/* {usernameErr.length === 0 ? null : <p className={style.error}>{usernameErr}</p>} */}
                {/* {usernameErr && <p className={style.error}>{usernameErr}</p>} */}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email</label>
                <input value={email} onChange={handleEmailChange} className={style.input} type="email" placeholder="Eg. John@cena.com" />
                <p className={style.error}>{emailErr}</p>
                {/* {emailErr.length === 0 ? null : <p className={style.error}>{emailErr}</p>} */}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password</label>
                <input value={password} onChange={handlePasswordChange} className={style.input} type="password" placeholder="enter your password" />
                <p className={style.error}>Error...</p>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input value={repeatPassword} onChange={handleRepeatPasswordChange} className={style.input} type="password" placeholder="enter your password" />
                <p className={style.error}>Error...</p>
            </div>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}




// Products susitvarkyk data, pakeisk stilius, idek nuotraukas darzoviu, ir pabaigoje padaryk prideti 
//i krepseli ir sudek suma.
// pasidaryk Register form su savo stiliumi... paiimk ir likvidacijas!!!
// N.D. padaryk