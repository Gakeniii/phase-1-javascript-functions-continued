// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(star = '*'){
    return function(content = 'special'){
        return `You are ${star}${content}${star}!`;
    };
}
wrapAdjective ()('a hard worker');
wrapAdjective ('||')('a dedicated programmer');
