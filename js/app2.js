const deleteBtns = document.querySelectorAll('#book-list .delete');
const mainTitle = document.querySelector(".title");
const link = document.querySelector('#page-banner a');
const bookList = document.querySelector('#book-list ul');



console.log("-------Chapter 9 : Events-------");
mainTitle.addEventListener('click', (e) => {
    console.log("My e.target is", e.target);
    console.log(e);
    if (e.shiftKey) {
        alert("Dont press the shift key")
    }
    mainTitle.textContent = "Main Title Clicked";
});

//Method 1
// deleteBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();//prevents default behaviour . page refresh on click
//         btn.parentNode.remove() //Not supported in IE
//     });
// });

//Method 2
// deleteBtns.forEach((btn) => {
//     btn.addEventListener('click', function (e) {
//         const li = e.target.parentElement; //grabs parent of any button we click
//         li.parentElement.removeChild(li);
//     });
// });

console.log("-------Chapter 10 : JS Event Bubbling -------");
//Method 3 - Using event bubbling
bookList.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        bookList.removeChild(li);
    }
});

link.addEventListener('click', (e) => {
    e.preventDefault(); //prevents default action from happenning
    console.log('The navigation to : ', e.target.textContent, ' has been prevented')
});

















