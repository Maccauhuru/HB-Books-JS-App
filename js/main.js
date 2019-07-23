const bookList = document.querySelector('#book-list ul');
const addBookForm = document.forms['add-book'];

//Delete books from list
bookList.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        bookList.removeChild(li);
    }
});

//Add books to list
addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue = addBookForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content to elements
    li.textContent = inputValue;
    deleteBtn.textContent = 'delete';

    //append the elements to DOM
    li.appendChild(bookName);
    li.appendChild(bookName);
    bookList.appendChild(li)
});