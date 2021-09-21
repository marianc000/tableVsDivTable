import data from './data.js';


function row(vals) {
    return '<div class="row">'
        + vals.map(val => `<div>${val}</div>`).join('')
        + '</div>';
}

 function table(data) {
    return data.map(vals => row(vals)).join('');
}

export default table(data);
 

