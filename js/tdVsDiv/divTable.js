function rowDiv(val) {
    return `<div class=row>${val}</div>`;
}


function div(val) {
    return `<div>${val}</div>`;
}

export default function tableHtml(data ) {
    return  div(data.map(row => rowDiv(row.map(cell => div(cell)).join(''))).join(''));
}

