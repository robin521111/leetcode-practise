var isValid = function(s){
    let valid = true;
    const mapper = {"{":"}","[":"]","(":")"}
    const stack = [];


for(let i in s){
    const v = s[i];
    if(['(','[','{'].indexOf(v) > -1){
        stack.push(v);
    }
    else{
        const peak = stack.pop();
        if(v !== mapper[peak]){
            return false;
        }
    }
}

if(stack.length > 0) return false;

return valid;

};