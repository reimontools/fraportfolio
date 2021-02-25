export const getLocalStorage = () => {
    var options = {autoHide: true, showBtnUp: true};
    if(localStorage.getItem('fraOptions') != null) {
        options = localStorage.getItem('fraOptions');
    }
    return options;
}

export const setLocalStorage = (options) => {
    localStorage.setItem('fraOptions', options);
}

// export default class Store {
//     constructor() {
//         this.options;
//         this.defaultOptions = {autoHide: false, showBtnUp: true};
//     };
//     getData() {
//         if(localStorage.getItem('fraOptions') === null) {
//             this.options = this.defaultOptions;
//         } else {
//             this.options = localStorage.getItem('fraOptions');
//         }
//         return this.options;
//     };
//     setData(options) {
//         localStorage.setItem('fraOptions', options);
//     };
//     getStatus() {
//         if(localStorage.getItem('fraOptions') === null) {
//             return true;
//         } 
//         return false;
//     };
//     clean() {
//         localStorage.clear();
//         console.log("Cookies cleaned")
//     };
// };