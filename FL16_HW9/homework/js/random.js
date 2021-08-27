export function random(){
    const arrElems = ['paper','rock','scissors'];
    return arrElems[Math.floor(Math.random() * arrElems.length)];
}
