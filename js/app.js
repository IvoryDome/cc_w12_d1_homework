document.addEventListener('DOMContentLoaded', () => {

  console.log("I loaded!");

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleFormSubmit = function (){
  event.preventDefault();
  // const titleResult = document.querySelector('#title-result');
  // const authorResult = document.querySelector('#author-result');
  // const categoryResult = document.querySelector('#category-result');
  // const genreResult = document.querySelector('#genre-result');
  const resultList = document.querySelector('#result-list');
  const item = document.createElement('li')
  item.textContent = `Title: ${this.title.value} \n Author: ${this.author.value} \n Category: ${this.category.value} \n Genre: ${this.genre.value}`
  // titleResult.textContent = `Title: ${this.title.value}`;
  // authorResult.textContent = `Author: ${this.author.value}`;
  // categoryResult.textContent = `Category: ${this.category.value}`;
  // genreResult.textContent = `Genre: ${this.genre.value}`;
  resultList.appendChild(item);
  form.reset();
}

// const reading_list = document.querySelector("#reading-list")
// const item = document.createElement('li')
// item.textContent = `${this.title.value} by ${this.author.value} as a ${this.category.value}`
// reading_list.appendChild(item);
