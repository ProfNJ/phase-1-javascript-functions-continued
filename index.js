// code your solution here
function saturdayFun(phrase = "roller-skate"){
    return `This Saturday, I want to ${phrase}!`;
}

function mondayWork(phrase = "go to the office"){
    return `This Monday, I will ${phrase}.`;
}

function wrapAdjective(flair = '*'){
    const mess = function (msg = 'special'){
        return `You are ${flair}${msg}${flair}!`;
    }

    return mess;
}