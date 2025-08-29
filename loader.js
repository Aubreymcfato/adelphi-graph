// Carica automaticamente tutti i file JSON dalla cartella "data"
async function getJsonFiles() {
    // Fetch la lista dei file tramite una chiamata a GitHub API
    // (Su GitHub Pages puro non puoi leggere la directory, ma puoi generare una lista automatica!)
    // Soluzione: crea un file "data/index.json" che contiene la lista dei file in "data/"
    // Questo file può essere generato automaticamente (vedi sotto).

    const indexFile = 'data/index.json';
    try {
        const response = await fetch(indexFile);
        if (!response.ok) throw new Error("Impossibile caricare la lista dei JSON.");
        const fileList = await response.json(); // ["libro1.json", "libro2.json", ...]
        // Trasforma in path completo
        return fileList.map(f => `data/${f}`);
    } catch (e) {
        console.error(e);
        return [];
    }
}
