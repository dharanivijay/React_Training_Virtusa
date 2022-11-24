exports.getDate = function(){

let options = {
    "weekday": "long",
    "day": "numeric",
    "month": "numeric",

};

return new Date().toLocaleDateString("en-US", options);


}

exports.getDay = function(){

    let options = {
        "weekday": "long",
    };
    
return new Date().toLocaleDateString("en-US", options);
    
    }