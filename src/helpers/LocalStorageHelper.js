export const readLocalStorage = () => {
    var value = true;
    if(localStorage.getItem('fraFixedLogo') != null) {
        value = localStorage.getItem('fraFixedLogo');
        value === "true" ? value = true : value = false;
    };
    return value;
};

export const writeLocalStorage = (value) => {
    console.log('cambiando a', value)
    localStorage.setItem('fraFixedLogo', value);
};