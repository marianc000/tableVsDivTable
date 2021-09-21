import tableHtml from './table.js';
import divTableHtml from './divTable.js';
import divFlexTableHtml from './divFlexTable.js';
import preprocess from './preprocess.js';

const DATA_URL = 'api/benchmarkingDOM';
 
fetch(DATA_URL).then(response => response.json()).then(data => {
    data = preprocess(data);
    tableDiv.innerHTML =tableHtml(data );
    divTableDiv.innerHTML =divTableHtml(data );
    divFlexTableDiv.innerHTML =divFlexTableHtml(data );
});
