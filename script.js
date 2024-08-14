function wordKey(button){
    if(button.classList.contains('for_upper')){
        const characters = document.getElementsByClassName('char');
        for(let char of characters){
            char.style.textTransform = 'lowercase';
        }
        button.classList.remove('for_upper')
    }  
    else if(button.id === 'uppercasebutton'){
        const characters = document.getElementsByClassName('char');
        for(let char of characters){
            char.style.textTransform = 'uppercase';
        }
        button.classList.add("for_upper");
    }
}


// const body = document.querySelector('body');
// const headMain = document.getElementById('head_main');
// const bodyMain = document.getElementById('main_text');
// const headSender = document.getElementById('senders_area');
// let clear;

// body.addEventListener('click',function(){
//     clear = setTimeout(mainSelect, 1000);
// });

// function mainSelect(){
//     if(headMain.style.borderWidth === '0px' ){
//         headMain.style.borderWidth = '5px';
//         bodyMain.style.borderWidth = '0px';
                    
//     }
//     else{
//         headMain.style.borderWidth = '0px';
//         bodyMain.style.borderWidth = '5px';
//     }
// }


// body.addEventListener('click', function(){
//     setTimeout(headSelect, 300)
// });

// function headSelect(){
//         if(headMain.style.borderWidth === '5px'){
//              headSender.style.borderWidth = '5px';
//          }
// }

const body = document.querySelector('body');
const headMain = document.getElementById('head_main');
const bodyMain = document.getElementById('main_text');
const headBack = document.getElementById('back_for_head');
const headSender = document.getElementById('senders_area');
const headSent = document.getElementById('sent_fieldarea');

let forMain = true;
let clickCount = 0;
let clickTimeout;
let forHead = true;

body.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 1) {
        clickTimeout = setTimeout(() => {
            if (clickCount === 1) {
                mainSelect();
            }
            clickCount = 0;
        }, 300);
    } 
    
    else if (clickCount === 2) {
        clearTimeout(clickTimeout);
        clickCount = 0;
        const headMainBorderWidth = window.getComputedStyle(headMain).borderWidth;
        if (headMainBorderWidth === '5px') {
            forMain = false;
            headMain.style.borderWidth = '0px';
            headSelect();
         }
            
    }
});

function mainSelect() {
    const headMainBorderWidth = window.getComputedStyle(headMain).borderWidth;
    if(forMain){
        if (headMainBorderWidth === '0px') {
            headMain.style.borderWidth = '5px';
            bodyMain.style.borderWidth = '0px';
        } else {
            headMain.style.borderWidth = '0px';
            bodyMain.style.borderWidth = '5px';
        }
    }
}

function headSelect(){
    const headBackBorderWidth = window.getComputedStyle(headBack).borderWidth;
    const headSendersBorder = window.getComputedStyle(headSender).borderWidth;
    const headSentBorder = window.getComputedStyle(headSent).borderWidth;
    if(forHead){
        if(headSendersBorder === '0px' && headSentBorder === '0px'){
            headBack.style.borderWidth = '5px';
            headSender.style.borderWidth = '0px';
            headSent.style.borderWidth = '0px';
            
        }
        else if(headBackBorderWidth === '5px' && headSentBorder === '0px'){
            headSender.style.borderWidth = '5px';
            headBack.style.borderWidth = '0px';
            headSent.style.borderWidth = '0px';
        }
        else{
            headSent.style.borderWidth = '5px';
            headBack.style.borderWidth = '0px';
            headSender.style.borderWidth = '0px';
        }
    }
}
            

// body.addEventListener('click', function(event){
//         if(headMain.style.borderWidth === '0px' ){
//             headMain.style.borderWidth = '5px';
//             bodyMain.style.borderWidth = '0px';
            
//         }
//         else{
//             headMain.style.borderWidth = '0px';
//             bodyMain.style.borderWidth = '5px';
//         }
//     });

// body.addEventListener('dblclick', function(event){
//         if(headMain.style.borderWidth === '5px'){
//             headSender.style.borderWidth = '5px';
//         }
//             });

