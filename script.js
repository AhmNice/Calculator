const body = document.querySelector('.container');
const toggleSwitch = document.querySelector('.toggle-switch');
let modeIndex = 1;
const modes = ['theme-1', 'theme-2', 'theme-3'];


const themeOne = document.getElementById('themeOne');
const themeTwo = document.getElementById('themeTwo');
const themeThree = document.getElementById('themeThree');
themeOne.addEventListener('click',()=>{
    if(toggleSwitch.classList.contains('state-2')|| toggleSwitch.classList.contains('state-3')){
        toggleSwitch.classList.remove('state-2', 'state-3')
        toggleSwitch.classList.add('state-1')
        body.classList.add('theme-1')
        body.classList.remove('theme-3','theme-2')
    }else{
        toggleSwitch.classList.add('state-1')
        body.classList.add('theme-1')
        body.classList.remove('theme-3','theme-2')
    }
});
themeTwo.addEventListener('click',()=>{
    if(toggleSwitch.classList.contains('state-1')|| toggleSwitch.classList.contains('state-3')){
        toggleSwitch.classList.remove('state-1', 'state-3')
        toggleSwitch.classList.add('state-2')
        body.classList.add('theme-2')
        body.classList.remove('theme-3','theme-1')
    }else{
        body.classList.add('theme-2')
        body.classList.remove('theme-3','theme-1')
    }
});
themeThree.addEventListener('click',()=>{
    if(toggleSwitch.classList.contains('state-1')|| toggleSwitch.classList.contains('state-2')){
        toggleSwitch.classList.remove('state-1', 'state-2')
        toggleSwitch.classList.add('state-3')
        body.classList.add('theme-3')
        body.classList.remove('theme-2','theme-1')
    }else{
        body.classList.add('theme-3')
        body.classList.remove('theme-2','theme-1')
    }
});
toggleSwitch.addEventListener('click', () => {
    body.classList.remove(...modes);
    modeIndex = (modeIndex + 1) % modes.length;
    body.classList.add(modes[modeIndex]);
    toggleSwitch.classList.remove('state-1', 'state-2', 'state-3');
    toggleSwitch.classList.add(`state-${modeIndex + 1}`);
    console.log( modeIndex = (modeIndex + 1) % modes.length)
});


let display = document.querySelector('.screen');

function appendNumber(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteCharacter() {
    display.value = display.value.slice(0, -1);
}

function compute() {
    try {
        display.value = addComma(eval(display.value));
    } catch {
        display.value = 'Error';
    }
}
function addComma(x){
    return x
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,",");
}