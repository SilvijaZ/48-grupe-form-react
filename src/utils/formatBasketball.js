export function formatBasketballNumber(number){
    return (number < 10 ? '0': '') + number;
}

// jeigu skaicius mazesnis uz nuli, tai grazins papildomai atspausidins nuli arba nieko ir pridėsim skaiciu.



/*
export function formatBasketballNumber(number, minSize = 4){
    let strNumber = number.toString();  // skaičiaus konvertavimui į tekstą.
    let size = strNumber.length;  // apskaičiuoja tekstą atvaizduojančio skaičiaus ilgį
    return (size < minSize ? '0'.repeat(minSize - size) : '') + number; // jeigu size mazesnis uz 4, 
    priraso tiek nuliu kiek truksta, o jeigu didesnis tai tuscia teksta grazina ir prideda ta skaiciu.
} */