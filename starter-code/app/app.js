
// document.addEventListener('DOMContentLoaded', function() {

//   ////////////////////////////////////////////////////////////////////////////
//   //get
//   ////////////////////////////////////////////////////////////////////////////

//   var request = new XMLHttpRequest();

//   var objectArrayOfBooks;

//   request.open('GET', 'https://den-super-crud.herokuapp.com/books/', true);

//   request.onload = function() {
//     if(request.status >= 200 && request.status < 400) {
//       // Success!
//       let resp = request.responseText;
//       objectArrayOfBooks = JSON.parse(request.responseText);
  		
//       console.log( objectArrayOfBooks.books );
//       console.log(  objectArrayOfBooks.books.length );


//       //this is where im apending eveything to the page
//       for( let i = 0; i < objectArrayOfBooks.books.length; i ++ ){
//         console.log('hey');

//         //div that will hold stuff
//         let newDiv = document.createElement('div');

//         //getting the title
//         let title = document.createElement('p');
//         title.innerHTML = objectArrayOfBooks.books[i].title;

//         //gettign the author
//         let author = document.createElement('p');
//         author.innerHTML = objectArrayOfBooks.books[i].author;

//         //getting the image
//         let image = document.createElement('img');
//         image.setAttribute('src', objectArrayOfBooks.books[i].image);
//         image.setAttribute('alt', objectArrayOfBooks.books[i].image);

//         //getting the releaseDate
//         let releaseDate = document.createElement('p');
//         releaseDate.innerHTML = objectArrayOfBooks.books[i].releaseDate;

//         //for spaceing 
//         hr = document.createElement("hr");

//         //apending evrything
//         document.getElementById('books').appendChild(newDiv);
//         newDiv.appendChild(title);
//         newDiv.appendChild(author);
//         newDiv.appendChild(image);
//         newDiv.appendChild(releaseDate);

//         newDiv.appendChild(hr);
//       }

//     }else{
        
//         // We reached our target server, but it returned an error
        
//         console.log('Uh oh, an error on the server side');
//       }
//   };

//   request.onerror = function() {
//     // There was a connection error of some sort
//     console.log('Something went wrong with the client side.');
//   };

//   request.send();


//   /*///////////////////////////////////////////////////////////////////////////
//   //post
//   ////////////////////////////////////////////////////////////////////////////

  
//   var xhr = new XMLHttpRequest();

//   var params = "title=iMadeThis&author=sassan&image=nha&releaseDate=never";

//   xhr.open("POST", 'https://den-super-crud.herokuapp.com/books', true);

//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   //xhr.setRequestHeader("Content-length" , params.length );

//   xhr.onreadystatechange = function() {
//     if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
//       request.send();
//     }

//   console.log( xhr.readyState );

//   }

//   xhr.send(params); 

//   console.log(xhr);

// //*/

// document.getElementById('button').addEventListener('click', function(){

//     let newTitle = document.getElementById('book-title').value;
//     let newAuthor = document.getElementById('book-author').value;
//     let newImage = document.getElementById('book-image').value;
//     let newDate = document.getElementById('book-release-date').value;


//     console.log(newTitle);
//     console.log(newAuthor);
//     console.log(newImage);
//     console.log(newDate);
    
//     var stringForParams = newTitle + '&' + newAuthor + '&' + newImage + '&' + newDate; 

//     var xhr = new XMLHttpRequest();

//     var params = stringForParams;

//     xhr.open("POST", 'https://den-super-crud.herokuapp.com/books', true);

//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//     //xhr.setRequestHeader("Content-length" , params.length );

//     xhr.onreadystatechange = function() {
//       if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
//         request.send();
//       }

//       console.log( xhr.readyState );

//     }

//     xhr.send(params); 

//     console.log(xhr);

//     });

// });


////////////////////////////////////////////////////////////////////////////
// This ws all good and fun but for the love of god i got to get this shit
// done and i hate jquery but god damit im gana have to use it
////////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
  

  //gets the books and puts them on the page
  function getBooks(){
    $('#books').empty();
    let booksJSON = $.get('https://den-super-crud.herokuapp.com/books').done(function(data){
      
      console.log('data: ' + data);
      
      console.log('booksJSON: ' + booksJSON);
      
      let booksArr = booksJSON.responseJSON.books;
      
      for(let i = 0; i < booksArr.length; ++i){
        let eachBook = $('<ul class = "eachBook">');
        let title = $('<li class = "title">' + booksArr[i].title + '</li>');
        let author = $('<li class = "author">' + booksArr[i].author + '</li>');
        let date = $('<li class = "date">' + booksArr[i].releaseDate + '</li>');
        let image = $('<img class = "image" src = ' + booksArr[i].image + '>');
        eachBook.append(title, author, date, image);
        $('#books').append(eachBook);
      }

    });

    console.log("ran get books");

  }

  //takes book form input feild and puts them on the page
  $('#submit').click(function(event){

    event.preventDefault();
    
    let newTitle = $('#book-title').val();
    let newAuthor = $('#book-author').val();
    let newImage = $('#book-image').val();
    let newDate = $('#book-release-date').val();
    
    myBook = {
      title: newTitle, 
      author: newAuthor, 
      image: newImage, 
      releaseDate: myDate
    };

    $.post('https://den-super-crud.herokuapp.com/books', myBook);
    
    getBooks();

    console.log("ran get books");

  });

  getBooks(); 

});