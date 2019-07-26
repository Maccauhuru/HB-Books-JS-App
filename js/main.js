const bookList = document.querySelector('#book-list ul');
const addBookForm = document.forms['add-book'];
const hideBooks = document.querySelector('#add-book #hide');
const bookNames = bookList.getElementsByTagName('li');

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
    bookName.textContent = inputValue;
    deleteBtn.textContent = 'delete';


    //add classes to elements
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append the elements to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    bookList.appendChild(li);

});

//Hide Books
//Create an event listener on the check box
hideBooks.addEventListener('change',(e)=>{
     (hideBooks.checked) ? bookList.style.display = 'none' :bookList.style.display = 'initial'
});

//Search Books
//Create a query selector for the input box
const searchBooks = document.forms['search-books'].querySelector('input');
searchBooks.addEventListener('keyup',(e)=>{
    const searchTerm = e.target.value.toLowerCase();
    Array.from(bookNames).forEach((book)=>{
        const bookTitle = book.firstElementChild.textContent;
        if(bookTitle.toLowerCase().includes(searchTerm)){
            book.style.display = 'block';
        } else {
            book.style.display = 'none'
        }
    });
});

//tabbed content
//listen for clicks on elements with a data-target attribute
//if the attribute matches your id , display panel by setting class to active






