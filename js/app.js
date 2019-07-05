var pageBanner = document.getElementById("page-banner");
var mainTitle = document.querySelector(".title");
var lists = document.getElementsByTagName("li");
var bookNames = document.getElementsByClassName("name");
var wrapper = document.querySelector('#wrapper');
var secondBook = document.querySelector('#book-list li:nth-child(2) .name');
var allSpanTags = document.querySelectorAll('#book-list li .name')
var bookList = document.querySelector('#book-list');

console.log("-------Chapters 1 - 5 : Query Selectors-------");
console.log("-------Chapters 1 - 5 : Node Types & Clones-------");
//Array.from(allSpanTags).forEach(book => console.log(book.textContent += "Hardy Boys Book#"));
bookList.innerHTML = '<div><h2>Original Hardy Boys Book Series</h2></div>';
bookList.innerHTML += '<p>Hardy Boys Book #1</p>';
mainTitle.textContent = "Hardy Boys Books";
console.log(`The banner node type is : ${pageBanner.nodeType}`);
console.log(`The banner node name is : ${pageBanner.nodeName}`);
console.log(`The banner node has child nodes? : ${pageBanner.hasChildNodes()}`);

const clonedBookList = bookList.cloneNode(true);
console.log(clonedBookList);

console.log("-------Chapter 6 : Nodes-------");
//Get the parent node of book list
console.log('The parent node of bookList is :', bookList.parentNode);
console.log('The parent element of bookList is :', bookList.parentElement);
console.log('The parent element theparent of bookList is :', bookList.parentElement.parentNode);
console.log("-------Chapter 7 : Children Nodes-------");
//Get all the child Elements
console.log(bookList.childNodes); //Returns a NodeList
console.log(bookList.children); //Returns an HTMLCollection
console.log(bookList.children); //Returns an HTMLCollection

console.log("-------Chapter 8 : Sibling Nodes-------");
console.log('next sibling', bookList.nextSibling); //Returns next Sibling
console.log('next element sibling', bookList.nextElementSibling); //Returns the next Sibling element
console.log('previous sibling', bookList.previousSibling);
console.log('previous Element sibling', bookList.previousElementSibling); //Returns the next Sibling element

bookList.previousElementSibling.querySelector('p').innerHTML += "<br />Cradle To The Grave";

console.log("-------Chapter 9 : Events-------");