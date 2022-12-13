export  function validateUsername (input) {
    if (input === "") {
        return false;
    } else {return true}
}

export function validateEmail (input) {
    if (!/^[[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input))
        return true;  
}

export function validatePassword (input) {
    if (input.length >= 8) {
        return true;
    } else return false;
}









