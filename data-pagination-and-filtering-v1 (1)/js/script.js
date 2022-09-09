
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

let studentList;
let button;

/*
Function below creates and inserts elements needed to display nine students on a page.
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   for ( let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList = ` 
             <li class="student-item cf">
               <div class="student-details">
               <img class="avatar" src='${list[i].picture.medium}' alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
               </div>
            </li> 
            `   
            ul.insertAdjacentHTML('beforeend', studentList);
      }
   
   };

}


/*
The function below will create and add elements needed for pagination buttons. Users will be able to use these
buttons to see nine different students on a webpage.
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML  = '';

   for (let i = 1; i <= numOfPages ; i++) {
       button = ` 
         <li>
            <button type="button">${[i]}</button>
         </li> 
         `
         linkList.insertAdjacentHTML('beforeend', button);
}
   
   const btnUpdate = document.querySelector('button');
      btnUpdate.className = 'active';

   linkList.addEventListener('click', (e) => {
      if ( e.target.tagName === 'BUTTON') {
         const activeBtn = document.querySelector('.active');
         activeBtn.className = '';
         
         e.target.className = 'active';
         
         showPage(data, e.target.textContent)
      }


   });
}

// This calls the functions created above.
 addPagination(data);
 showPage(data, 1);