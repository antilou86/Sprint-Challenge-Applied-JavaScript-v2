// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let promise = axios.get('https://lambda-times-backend.herokuapp.com/topics').then((response) => {
    console.log(response.data.topics);
    const topics = response.data.topics;

    topics.forEach( (topic) => {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        console.log(tab);
        tab.textContent = topic;
        
        let targetElement = document.querySelector('.topics');
        return targetElement.appendChild(tab);
    });
})