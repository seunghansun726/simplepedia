import react from "react";
import data from '/Users/seung-han/Documents/simplepedia/src/data/data.json';

const sortedData = data.sort((a,b) => (a.title > b.title) ? 1 : -1);
let navArray = [];
let off_listItem = [];

//build Array of First Letters
function buildNavArray(){
    sortedData.forEach(item => {
        let temp = item.title.charAt(0);
        if(navArray.length === 0 || navArray[navArray.length - 1] !== temp) {
            navArray.push(temp);
        }
    });

    //console.log(navArray);
}

//build Array of all objects starting with certain letter / number
function navigateFirstStage(refer){
    let sectionArray = [];
    for (let i = 0; i < sortedData.length; i++) {
        if (sortedData[i].title.charAt(0) === refer) {
            sectionArray.push(sortedData[i])
            if ((i+1) !== sortedData.length) {
                if (sortedData[i].title.charAt(0) !== refer){
                    break;
                }
            }
        }
    }
    return sectionArray;
}

function makeList(){
    buildNavArray();
    const listItem = [];
    console.log(navArray);
    for (let i = 0; i < navArray.length; i++){
        listItem.push(<li><a href="#"> {navArray[i]} </a></li>);
    }
    console.log(listItem);
    off_listItem = listItem;
}

function NavBar(){
    makeList();
    //const temp = navigateFirstStage("2");
    //console.log(sortedData);
    //console.log(temp);
    return(
        off_listItem
    );
}


export default NavBar;