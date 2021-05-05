/*Page Layout function output a maximum of 9 student
& insert HTML layout inside the ul */
const showPage = (list, page) => {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector("ul.student-list");
  ul.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      ul.insertAdjacentHTML(
        "beforeend",
        `<li class="student-item cf">
         <div class = "student-details">
            <img class = 'avatar' src = '${list[i].picture.large}' alt = "Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class='email'>${list[i].email}</span>
         </div>
         <div class='joined-details'>
            <span class='date'>${list[i].registered.date}</span>
         </div>
      </li>
      `
      );
    }
  }
};

//creation of Pagination function
const addPagination = (list) => {
  const pageNeeded = Math.ceil(list.length / 9);
  const ulLink_List = document.querySelector(".link-list");
  ulLink_List.innerHTML = "";

  //creation of amount of page buttons required.
  for (let i = 0; i < pageNeeded; i++) {
    ulLink_List.insertAdjacentHTML(
      "beforeend",
      `<li>
      <button type = "button"> ${i + 1} </button>
      </li>
   `
    );
  }
  const firstButton = document.querySelector(".link-list button");
  firstButton.className = "active";

  /*Eventlistener for Pagination button 
    also transfer active button className*/
  ulLink_List.addEventListener("click", (e) => {
    const selectedPage = e.target;

    if (selectedPage.tagName === "BUTTON") {
      const previousPage = document.querySelector(".active");
      previousPage.className = "";
      selectedPage.className = "active";
      showPage(data, selectedPage.textContent);
    }
  });
};

//create search field format
const header = document.querySelector(".header");
header.insertAdjacentHTML(
  "beforeend",
  `<label for="search" class = 'student-search'>
    <span>Search by name</span>
    <input id='search' placeholder='Search by name ...'>
    <button type = 'button'><img src='img/icn-search.svg' alt='Search icon'></button>
  </label>  
`
);

//creation of the search function.
const searchFunction = (list) => {
  const studentsList = document.querySelector(".student-list");
  const searchInput = document
    .querySelector(".student-search input")
    .value.toLowerCase();
  //Empty array to store search result.
  const results = [];

  /*Compare search input to listName and append match to results array
  also call function to display search result*/
  for (let i = 0; i < list.length; i++) {
    const listName = Object.values(list[i].name).join(" ").toLowerCase();
    if (searchInput !== 0 && listName.includes(searchInput)) {
      results.push(list[i]);
      studentsList.textContent = "";
      showPage(results, 1);
      addPagination(results);
    }
  } //Return No result & adjust pagination.
  if (results == 0) {
    studentsList.textContent = `No results found`;
    addPagination(results);
  }
};

//EventListener for the search button
const searchButton = document.querySelector(".student-search button");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchFunction(data);
});

//improve live search with a keyup listener on the input field
const searchEngine = document.querySelector("#search");
searchEngine.addEventListener("keyup", () => {
  searchFunction(data);
});

showPage(data, 1);
addPagination(data);
searchFunction(data);
