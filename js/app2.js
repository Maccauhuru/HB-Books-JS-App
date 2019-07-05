var deleteBtns = document.querySelectorAll('#book-list .delete');
var mainTitle = document.querySelector(".title");



console.log("-------Chapter 9 : Events-------");
mainTitle.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e);
    if (e.shiftKey) {
        alert("Dont press the shift key")
    }
    mainTitle.textContent = "Main Title Clicked";
});

deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.parentNode.remove()
    })
})