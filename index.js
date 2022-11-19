// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];





function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function destructivelyAppendCat(name){
    console.log ("boots");
    return cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    console.log ("puss");
    return cats.unshift(`${name}`);
}

function appendCat(name){
    console.log ("pink");
    const puss = [...cats,`${name}`];
    return puss;
}

function prependCat(name){
    console.log ("broom");
    const pussi= [`${name}`, ...cats];
    return pussi;
}


function removeLastCat(){
    const paka = cats.slice(0,-1);
    return paka;
}

function removeFirstCat(){
    const pakas = cats.slice(1);
    return pakas;
}