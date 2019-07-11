const bookList = document.querySelector('#book-list ul');






//Delete books from list
bookList.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        bookList.removeChild(li);
    }
});