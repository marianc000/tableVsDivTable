function tr(val) {
    return `<tr>${val}</tr>`;
}

function th(val) {
    return `<th>${val}</th>`;
}

function td(val) {
    return `<td>${val}</td>`;
}

function table(val) {
    return `<table>${val}</table>`;
}

export default function tableHtml(data, caption) {
    const headers = tr(data[0].map(cell => th(cell)).join(''));
    const rows = data.filter((row, i) => i > 0).map(row => tr(row.map(cell => td(cell)).join(''))).join('');
    return table(headers + rows);
}


