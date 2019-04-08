export * from './util';  //include other module and relative export (transitive)

export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

export const obj = {
    name:'Bob',
    age:33
};
