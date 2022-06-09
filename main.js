// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll('.like');
// console.log(like);
const icon = document.querySelectorAll('.like-glyph');
console.log(icon);
const modal = document.querySelector('#modal'); 
// console.log(modal);

// setTimeout(() => {
//   console.log("3sec delay");
// }, "3000")

function likeEvent (event){
  const heart = event.target;
  heart.addEventListener('click');
  mimicServerCall() // 'http://mimicServer.example.com'
  .then(function() {
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;}
      else {
      heart.innerText = EMPTY_HEART;
    }
  })
  .catch(modal.remove);
    const myTimeout = setTimeout(document.modal.className = 'hidden', 3000);
  };
    // remove document.modal.className = ".hidden";
    // setTimeout() 3000 - apply .hidden cllass to modal

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
