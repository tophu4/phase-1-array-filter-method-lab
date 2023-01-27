// Code your solution here

// takes array of driver's names, string ; returns matching drivers
function findMatching(driverNames,str){
    return driverNames.filter(name => {
        return name.toLowerCase() == str.toLowerCase();
    })
}

function fuzzyMatch(driverNames,str){
    return driverNames.filter(name => {
        for(let i = 0; i < str.length; i++) {
            if(name[i] !== str[i]){
                return false;
            }
        }
        return true;
    })
}

function matchName(driverObjects,str){
    return driverObjects.filter(driver => {
        return driver.name === str;
    })
}