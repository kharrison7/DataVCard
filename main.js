console.log("JS connected");



fetch('https://api.github.com/users/kharrison7')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }


      // Examine the text in the response
      response.json().then(function(data) {
        console.log("data" + data.login);




      let markup = `
                <div class="title">
                  <p>User Name: ${data.login}</p>
                  <a>Email: ${data.url}</a>

                </div>
              `

              document.body.innerHTML = markup;

              });

})














//
//
//
//
// // fill is a class for a div in the HTML.
// let outOfLoop = document.querySelector(".fill");
//
// // This makes the title appear. top-text is a div class in the HTML.
// let topText = document.querySelector(".top-text");
// let title = document.createElement("div");
// let title_Text = `<h1>Internal Company Directory</h1>`;
// title.innerHTML = title_Text;
// topText.appendChild(title);
//
// // This is the loop to generate each profile.
// for(let i = 0; i < customers.results.length; i++){
// let x = document.createElement("div");
//
// // This makes c hold all the information for each profile.
// let c =
// `<img src=${customers.results[i].picture.large} alt="person_image"/>
// <h3>${customers.results[i].name.first} ${customers.results[0].name.last}</h3>
// <p>${customers.results[i].email}</p>
// <p>${customers.results[i].location.street}</p>
// <p>${customers.results[i].phone}</p>
// <p class="ssn">${customers.results[i].id.value}</p>
// `;
// // Above is the end of the template literal.
//
// // This marks each profile with a class for CSS styling.
//   x.setAttribute("class","oneClass");
//
// // This fills x with c and attaches the div x to outOfLoop.
// x.innerHTML = c;
// outOfLoop.appendChild(x);
// }
