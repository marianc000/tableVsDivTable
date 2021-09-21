import data from './data.js';

function row(vals, i) {
        return '<tr>'
            + vals.map(val => `<td>${val}</td>`).join('')
            + '</tr>';
}

function table(data) {
    return '<table>' + data.map((vals, i) => row(vals, i)).join('') + '</table>';
}
export default table(data);


