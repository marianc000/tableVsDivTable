export default function clear() {
   // return Promise.resolve();
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.innerHTML = '';
            setTimeout(resolve);
        });
    });
}



