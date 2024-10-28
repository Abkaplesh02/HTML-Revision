console.log("DOM");

console.log(b);


function addLanguage(langName){
const li=document.createElement('li');
li.innerHTML=`${langName}`;
document.querySelector('.language').appendChild(li)
}

addLanguage("Python");
addLanguage("TypeScript");
addLanguage("Java")


// First way
// Dom Manipulation
// Select that element and edit directly
const FirstEdit=document.querySelector('li:nth-child(2)');
FirstEdit.innerHTML="React";



// Second way
// create new element and replace it with that class which we want to change
const tempL=document.createElement('li');
tempL.textContent="C#"
FirstEdit.replaceWith(tempL);



// const firstEdit=document.querySelector('li:first-child');
// firstEdit.outerHTML="<li>Golang<\li>";



// const FirsttEdit= document.querySelector("li:nth-child(2)");
//    FirsttEdit.innerHTML="React";

//    const newli=document.createElement('li');
//    newli.textContent="c#";
//    FirsttEdit.replaceWith(newli);


var b= function (){
    console.log("new")
};

console.log(b)