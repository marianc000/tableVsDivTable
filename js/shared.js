 

export let results = {};
 

function addResult(label, start, domDone, rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start, domDone, rendered });
}

export function execute(label, html) {
    return new Promise(resolve => {
        try {
            gc(); // will not work without flags
        } catch (error) {
            console.error(error);
        }

        requestAnimationFrame(() => {
            const start = Date.now();
            root.innerHTML = html ;
            const domDone = Date.now();
            setTimeout(() => {
                addResult(label, start, domDone, Date.now());
                setTimeout(resolve);
            });
        });
    });
}




