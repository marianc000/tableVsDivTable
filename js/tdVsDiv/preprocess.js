const SHOW_RESULTS = 1;
export default function (data) {
    data = data.filter((ar,i)=>i<2).map(ar => ar.filter((e, i) => i < SHOW_RESULTS || i === ar.length - 1));
    const headers = ['Method', ...data[0].slice(1, -1).map((v, i) => i), 'Execution time, ms'];
    data.unshift(headers);
    return data;
}