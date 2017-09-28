/// <reference path = "myscript.js"/>
//creating custom filter and putting them in a different JS file. filterApp is the module object for which we have 
//created the filter. so we use it to reference the custom filter and create it. For that we need to add reference to the controller js file.

filterApp.filter("gender",function(){
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male";
                break;
            case 2:
                return "female";
                break;
            case 3:
                return "NA";
                break;
            default:
                break;
        }
    }
})