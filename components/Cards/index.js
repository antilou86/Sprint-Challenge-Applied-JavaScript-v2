// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
let data = axios.get('https://lambda-times-backend.herokuapp.com/articles').then( (response) => {
    console.log(response.data.articles);
    let articleObjects = response.data.articles;
    articleTopics = Object.keys(response.data.articles)
    //console.log(articleTopics)
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



function Card(info, topics) {

    function headlineFinder() {
        topics.keys.forEach(topic => {
            
        })
    }

    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    let headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')

    
    headlineDiv.textContent = ''
     //.topic[currentArray].headline
    cardDiv.appendChild(headlineDiv)

    let authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
       
        let imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
        authorDiv.appendChild(imgContainer)
            
            let authorImg = document.createElement('img')
            authorImg.src = ''; //url of authors image
            imgContainer.appendChild(authorImg)
        
        let span = document.createElement('span')
        span.textContent = 'By' + '';/*authors name*/
        authorDiv.appendChild(span)
    
    cardDiv.appendChild(authorDiv);
    return cardDiv;
};

//
// Create a card for each of the articles and add the card to the DOM.
