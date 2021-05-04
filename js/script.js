/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector("ul.student-list");
  ul.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      const firstName = data[i].name.first;
      const lastName = data[i].name.last;
      const email = data[i].email;
      const img = data[i].picture.large;
      const registered = data[i].registered.date;
      ul.insertAdjacentHTML(
        "beforeend",
        `<li class="student-item cf">
         <div class = "student-details">
            <img class = 'avatar' src = '${img}' alt = "Profile Picture">
            <h3>${firstName} ${lastName}</h3>
            <span class='email'>${email}</span>
         </div>
         <div class='joined-details'>
            <span class='date'>${registered}</span>
         </div>
      </li>
      `
      );
    }
  }
};

//import student info to create file
showPage(data, 1);
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
  const activeButton = ulLink_List.firstElementChild.firstElementChild;
  activeButton.className = "active";
  ulLink_List.addEventListener("click", (e) => {
    const selectedPage = e.target;
    if (selectedPage.textContent == pageNeeded) {
      const previousPage =
        selectedPage.parentNode.previousElementSibling.firstElementChild;
      selectedPage.className = "active";
      previousPage.className = "";
    } else if (selectedPage.textContent == 1) {
      const nextPage =
        selectedPage.parentNode.nextElementSibling.firstElementChild;
      selectedPage.className = "active";
      nextPage.className = "";
    } else {
      const previousPage =
        selectedPage.parentNode.previousElementSibling.firstElementChild;
      const nextPage =
        selectedPage.parentNode.nextElementSibling.firstElementChild;
      selectedPage.className = "active";
      previousPage.className = "";
      nextPage.className = "";
    }
    console.log(selectedPage.textContent);
    console.log(pageNeeded);
  });
};

// Call functions
addPagination(data);
