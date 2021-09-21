
import run from './benchmarking.js';
import divs from './approaches/divs.js';
import flexDivs from './approaches/flexDivs.js';
import table from './approaches/table.js';

const approaches = { divs, table, flexDivs };

startBtn.onclick = run;

const buttons = document.querySelectorAll('button[name]');
buttons.forEach(btn => btn.onclick = onClick);

function onClick() {
    buttons.forEach(btn => btn.className = (btn === this ? 'selected' : ''));
    root.innerHTML = approaches[this.name];
}

// tableBtn.onclick = () => root.innerHTML = table(data);
// divsBtn.onclick = () => root.innerHTML = divs(data);