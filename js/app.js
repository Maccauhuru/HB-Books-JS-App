var pageBanner = document.getElementById("page-banner");
var bookList = document.getElementById("book-list");
var titles = document.getElementsByClassName("title");
var lists = document.getElementsByTagName("li");
var bookNames = document.getElementsByClassName("name");
var wrapper = document.querySelector('#wrapper');
var secondBook = document.querySelector('#book-list li:nth-child(2) .name');
var allSpanTags = document.querySelectorAll('#book-list li .name')
var bookList = document.querySelector('#book-list');

//Array.from(allSpanTags).forEach(book => console.log(book.textContent += "Hardy Boys Book#"));
bookList.innerHTML = '<div><h2>Original Hardy Boys Book Series</h2></div>';
bookList.innerHTML += '<p>Hardy Boys Book #1</p>';
console.log(`The banner node type is : ${pageBanner.nodeType}`);