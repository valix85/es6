//For use this file install quokka.js in visual studio code and enable it on this file.
const numbers = [1,2,3,4];
const [a,b,c,d] = numbers;
a; b;c; d;
const [ , ,e,f] = numbers;
e; f;

//swap
let [w,x,y,z] = numbers;
[y,z]=[w,x];
w;x;y;z;




function getConfig(){
    return [
        true,
        10
    ];
}

const [active, numOfCore] = getConfig();

active;
numOfCore;

//it's more difficult to understand
const config = getConfig();
config;
config[0];
config[1];






//with spread operator
function getConfig2(){
    return [
        true,
        10,
        false,false,true,90,0.34,0.67
    ];
}
const [active2, numOfCore2, ...arr2] = getConfig2();
active2;
numOfCore2;
arr2;













var isOn = false;
var amount = 100;
function setConfig(){}
setConfig([true,20]);
isOn;
amount;

function setConfig2(configs){
    [isOn,amount]=configs;
}
setConfig2([true,20]);
isOn;
amount;



function setConfig3([_isOn, _amount]){
    isOn = _isOn;
    amount=_amount;
}
setConfig3([true,200]);
isOn;
amount;