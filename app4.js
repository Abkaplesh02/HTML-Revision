// using event listner

const button2=document.getElementById('myButton2');

button2.addEventListener('click', function(){
    alert('Button clicked!!');
});


// click on button to display the date.
const button3=document.getElementById('mybutton3');

console.log(button3)

button3.addEventListener('click', function(){
    // alert(new Date());
    this.style.color="blue"
    this.style.backgroundColor="black";
   
})

// click on button to change the text color
