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
        console.log("data: " + data.login);


// This changes values to actual items if API sends null or undefined.

let email_address ='';
if (data.email === null){
  email_address = "kharrison7@elon.edu";
}
else{
  email_address = data.email;
}







// This makes the items appear on the page.
      let markup = `

                  <div class="your_name">
                    <h1>${data.name}</h1>
                  </div>

<div class="box_of_three">

                <div class="title1">
                  <h2>The Basics</h2>
                  <p>Name: ${data.name}</p>
                  <p>Github URL: <a href="${data.html_url}" class="bright">${data.login}</a></p>
                  <p>Email: ${email_address}</p>
                  <p>Company: ${data.company}</p>
                  <p>Website: <a href="${data.blog}" class="bright">${data.blog}</a></p>
                </div>

                <div class="title2">
                  <h2>The Story</h2>
                  <p>Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu tellus, tincidunt quis erat quis, rhoncus cursus lacus. Fusce tincidunt metus vel convallis venenatis. Phasellus vitae tristique ligula. Integer non purus quis nibh ultrices commodo.</p>
                </div>

                 <div class="profile_Image">
                     <img class="img-circle" src="${data.avatar_url}" alt="profile_pic"/>
                 </div>

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
