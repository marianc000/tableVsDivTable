import divs from './approaches/divs.js';
import flexDivs from './approaches/flexDivs.js';
import table from './approaches/table.js';

import showResults from './results.js';
import clear from './clear.js';
import {  execute } from './shared.js';

export default function run() {
    const times = 20;
    let p = Promise.resolve().then(clear); 
 
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('inline cell divs', divs)).then(clear);
    }
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('flex row divs', flexDivs)).then(clear);
    }
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('table', table)).then(clear);
    }

    p.then(showResults);
}



