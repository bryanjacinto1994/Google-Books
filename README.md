# Google-Books

### Links: 

Deployed: <br>
https://googlebooks-bryanjacinto.herokuapp.com/
<br>
Github: <br>
https://github.com/bryanjacinto1994/Google-Books

<hr>


## Tools Used:

* Visual Studio Code - Open source code editor for building and debugging web and cloud applications.
* JavaScript - A scripting language that uses curly-bracket syntax, first class functions and object-oriented.
* jQuery - A JavaScript library that simplifys to manipulate HTML DOM.
* Git - Version control system to track changes to source code.
* Github - Hosts respository that can be deployed to GitHub pages.
* NodeJS - A JavaScript runtime built on Chrome's V8 JavaScript engine
* Express - To get a request from server localhost
* ReactJS - An Open-Source JavaScript Library to edit the html page without having to refresh the browser. Also have used of components that can be reused which makes the whole process alot easier than you think.
* Animated.CSS - A JavaScript Library that adds functions to animate the web design.

<br>

### NPM Packages Used:

* npm init -y
* npm install react
* npm install react-dom
* npm install react-scripts 
* npm install express
* npm install axios
* npm install animate

<hr>


<br>
 
![Site](./screenshot1.png) <br> <br> <hr> <br> <br>
![Site](./screenshot2.png) <br> <br>

<hr>


## Summary

This application called "Google-Books Search" allows the user to search for a book, save a book, and also look at more information at the book via google books homepage.
<br>
<br>
Everything was created using ReactJS (An open source JavaScript Library). 
An API was used so we can grab all the books that is being searched from the google books page: https://www.googleapis.com/books/v1/volumes?q=.
<br>
<br>
There is one special library that was used on this which is called Animate.CSS. This library created animations that are used on the web design. As you can see when you open the deployed link (Listed above), you can see that the nav bar will have a "fadeIn" effect, which is followed by the "jackInTheBox" jumbotron effect with a 2 seconds delay, and then last followed by the search form that will "rollIn" from the left of the screen. This library is great if you want to make your web page look more alive and fun. 



<hr>





## Code Snippet
Models:<br>
book.js : <br>
* This snippet shows the configuration of the models for the book using mongoose to get the book Schema information that includes:

<br>
- title <br>
- author <br>
- synopsis <br>
- date
<br> 

```javascript

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

```




## Author Links
Linkedin:<br>
https://www.linkedin.com/in/bryan-jacinto-100438aa/

Github:<br>
https://github.com/bryanjacinto1994
