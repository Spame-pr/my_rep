import {root,ref,createTweetPage,likedTweets,editTweet} from './htmlElems.js'

export const mainFunc = function(){
location.hash = '';
let tweets = [];

const goBack = () => {
  location.hash = '';
  location.reload();
};
const openTweetsCreaterPage = () => {
  location.hash = '#create';
  ref.mainContainer.innerHTML = '';
  ref.mainContainer.insertAdjacentHTML('beforeend', createTweetPage);

  document.getElementById('addForm').addEventListener('submit', event => {
    event.preventDefault();
    const addtweet = text => {
      if (text !== '') {
        const tweet = {
          id: Date.now(),
          name: text,
          liked: false
        };

        if(ref.tweetsArray){
        if (ref.tweetsArray.some(el => el.name === tweet.name)) {
          ref.alertContainer.classList.remove('hidden');
          ref.alertMessage.textContent = "You've already wrote this before!";
          setTimeout(() => {
            ref.alertMessage.textContent = '';
          }, ref.timeOut);

          return;
        }
      }
        tweets.push(tweet);
        addToLocalStorage(tweets);
        goBack();
      }
    };

    addtweet(document.getElementById('input-text').value);
  });
};

function addToLocalStorage(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets));
  rendertweets(tweets);
}
  ref.addTweetBtn.addEventListener('click', openTweetsCreaterPage);


const openEditTweetPage = event => {
  let text = event.target.textContent;
  const key = event.target.closest('li').dataset.key;

  if (event.target.nodeName === 'P') {
    location.hash = `#edit${key}tweet`;
    ref.mainContainer.innerHTML = '';
    ref.mainContainer.insertAdjacentHTML('beforeend', editTweet);
    document.getElementById('input-text').textContent = text;

    document
      .getElementById('editTwetWrapper')
      .addEventListener('submit', () => {
        let tweetsCopy = ref.tweetsArray;
        const index = ref.tweetsArray.findIndex(el => el.id === parseInt(key));
        tweetsCopy[index].name = document.getElementById('input-text').value;
        localStorage.clear();
        localStorage.setItem('tweets', JSON.stringify(tweetsCopy));
        location.hash = '';
      });
  }
};

function rendertweets(tweets) {
  ref.tweetContainer.innerHTML = '';

  tweets.forEach(function (item) {
    ref.tweetContainer.insertAdjacentHTML(
      'beforeend',
      `<li class="liked-list-item" data-key=${item.id}>
       <a href=#${item.id} id="editTweetlink">
      <p class="liked-tweet-text"> ${item.name}</p></a>
      <div class="formButtons">
        <button type="button" class="delete" id="delete">–</button>
        <button type="button" class="unlike ${
          item.liked ? 'like' : null
        }">&#10084;</button>
      </div>
    </li>`
    );
  });
}

function getFromLocalStorage() {
  if (localStorage.getItem('tweets')) {
    tweets = JSON.parse(localStorage.getItem('tweets'));
    rendertweets(tweets);
  }
}

const hadleButtons = event => {
  openEditTweetPage(event);
  const key = event.target.closest('li').dataset.key;
  const index = ref.tweetsArray.findIndex(el => el.id === parseInt(key));

  if (event.target.id === 'delete') {
    ref.tweetsArray.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('tweets', JSON.stringify(ref.tweetsArray));
    event.target.closest('li').remove();
  }

  if (event.target.nodeName === 'BUTTON') {
    event.target.classList[0] === 'unlike'
      ? event.target.classList.toggle('like')
      : null;

    const array = ref.tweetsArray;

    if (!array[index].liked) {
      array[index].liked = true;
    } else if (array[index].liked) {
      array[index].liked = false;
    }
    
    localStorage.clear();
    localStorage.setItem('tweets', JSON.stringify(array));
    addLikedButton();
    removeLikedButton();
  }
};

ref.tweetContainer.addEventListener('click', hadleButtons);

getFromLocalStorage();

const openLikedTweetsPage = () => {
  location.hash = '#liked';
  ref.mainContainer.innerHTML = '';
  ref.mainContainer.insertAdjacentHTML('beforeend', likedTweets);

  document.getElementById('back-button').addEventListener('click', goBack);

  const likedArray = ref.tweetsArray.filter(el => el.liked);

  likedArray.forEach(function (item) {
    document.getElementById('liked-list').insertAdjacentHTML(
      'beforeend',
      `<li class="liked-list-item" data-key=${item.id}>
       <a href=#${item.id} id="editTweetlink">
      <p class="liked-tweet-text"> ${item.name}</p></a>
      <div class="formButtons">
        <button type="button" class="delete" id="delete">–</button>
        <button type="button" class="unlike ${
          item.liked ? 'like' : null
        }">&#10084;</button>
      </div>
    </li>`
    );
  });

  document.getElementById('liked-list').addEventListener('click', hadleButtons);
};

const addLikedButton = () => {
  if (ref.tweetsArray.find(el => el.liked)) {
    root.insertAdjacentHTML(
      'beforeend',
      `<button id='toLikedTweets'>&#10084</button>`
    );
    document
      .getElementById('toLikedTweets')
      .addEventListener('click', openLikedTweetsPage);
  }
};

const removeLikedButton = () => {
  if (ref.tweetsArray.every(el => !el.liked)) {
    document.getElementById('toLikedTweets').remove();
  }
};

addLikedButton();
}