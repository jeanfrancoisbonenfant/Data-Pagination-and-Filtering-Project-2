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

//import student info to create file
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
  const pageNeeded = Math.ceil(list.length / 9);
  const ulLink_List = document.querySelector(".link-list");
  ulLink_List.innerHTML = "";

  for (let i = 0; i < pageNeeded; i++) {
    ulLink_List.insertAdjacentHTML(
      "beforeend",
      `<li>
      <button type = "button"> ${i + 1} </button>
      </li>
   `
    );
  }
  const firstButton = ulLink_List.querySelector("button");
  firstButton.className = "active";
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

const searchEngine = document.querySelector(".student-search");

const searchFunction = (list) => {
  const studentsList = document.querySelector(".student-list");
  const searchInput = document
    .querySelector(".student-search input")
    .value.toLowerCase();
  const results = [];
  for (let i = 0; i < list.length; i++) {
    const listName = Object.values(list[i].name).join(" ").toLowerCase();
    if (searchInput !== 0 && listName.includes(searchInput)) {
      results.push(list[i]);
      studentsList.textContent = "";
      showPage(results, 1);
      addPagination(results);
    }
    if (results == 0) {
      studentsList.textContent = `No results found`;
      addPagination(results);
    }
  }
};
searchEngine.addEventListener("click", (e) => {
  e.preventDefault();
  searchFunction(data);
});

searchEngine.addEventListener("keyup", () => {
  searchFunction(data);
});

showPage(data, 1);
addPagination(data);
searchFunction(data);
