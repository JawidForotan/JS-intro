/*Display the body element and body children element*/
console.log(`title: ${document.title}`);
document.title = "Modifying the DOM";
console.log(`new title: ${document.title}`);
let documentBgColor = document.body.style.backgroundColor;
documentBgColor = "#FF69B4";
console.log(`background color: ${documentBgColor}`);

/*Change the background color randomly */
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = randomColor;
//console.log(documentBgColor);

console.log(document.body.children);
/*Loop through all children of the body*/
let c = document.body.children;
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}
