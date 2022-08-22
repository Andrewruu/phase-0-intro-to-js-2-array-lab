// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const newcats = [...cats, name];
    return newcats;
}

function prependCat(name){
    const newcats = [name,...cats];
    return newcats;
}

function  removeLastCat(){
    const newcats = [...cats.slice(0,2)];
    return newcats;
}

function removeFirstCat(){
    const newcats = [...cats.slice(1,3)];
    return newcats;
}