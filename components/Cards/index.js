// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
let data = axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => {

    console.log(response.data.articles);
    let articleObjects = response.data.articles;

    articleTopics = Object.keys(response.data.articles);
    articleContent = Object.values(response.data.articles);

    //console.log(articleContent[0][0].headline); 

    function headlineFinder(arrayOfArrays) {
        arrayOfHeadlines = []
        arrayOfArrays.forEach(array => {
            for (i = 0; i <= array.length / arrayOfArrays.length; i++) {
                arrayOfHeadlines.push(array[0].headline);
            }
        })
        return arrayOfHeadlines;
    } headlineFinder(articleContent)

    function AuthorFinder(arrayOfArrays) {
        arrayOfAuthors = []
        arrayOfArrays.forEach(array => {
            for (i = 0; i <= array.length / arrayOfArrays.length; i++) {
                arrayOfAuthors.push(array[0].authorName);
            }
        })
        return arrayOfAuthors;
    } AuthorFinder(articleContent)

    function AuthorImgFinder(arrayOfArrays) {
        arrayOfAuthorImgs = []
        arrayOfArrays.forEach(array => {
            for (i = 0; i <= array.length / arrayOfArrays.length; i++) {
                arrayOfAuthorImgs.push(array[0].authorPhoto);
            }
        })
        return arrayOfAuthorImgs;
    } AuthorImgFinder(articleContent)

    function thisIsTough(arrayOfArrays) {
        arrayOfArrays.forEach(array => {
            for (i = 0; i <= array.length / arrayOfArrays.length; i++) {
                Card(arrayOfHeadlines, arrayOfAuthorImgs, arrayOfAuthors, i);
            }
        })
    } console.log(thisIsTough(articleContent));
})

// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>



function Card(array1, array2, array3, currentIndex) {



    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    let headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')


    headlineDiv.textContent = array1[currentIndex]//.topic[currentArray].headline
    cardDiv.appendChild(headlineDiv)

    let authorDiv = document.createElement('div')
    authorDiv.classList.add('author')

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    authorDiv.appendChild(imgContainer)

    let authorImg = document.createElement('img')
    authorImg.src = array2[currentIndex]; //url of authors image
    imgContainer.appendChild(authorImg)

    let span = document.createElement('span')
    span.textContent = 'By' + array3[currentIndex];/*authors name*/
    authorDiv.appendChild(span)

    cardDiv.appendChild(authorDiv);
    return cardDiv;
};

//
// Create a card for each of the articles and add the card to the DOM.
