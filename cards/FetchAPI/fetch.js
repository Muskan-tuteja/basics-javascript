// fetch('https://fakestoreapi.com/products/1')
// .then((rowdata)=>{
//   // console.log(rowdata)
//   return rowdata.json()
// })
// .then((data)=>{
//   console.log(data.results)
// })
// .catch((err)=>{
//   console.log(err)
// })

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json.price))

// fetch("https://jsonplaceholder.typicode.com/posts")  // API se data laa rahe h
//   .then(response => response.json())
//   .then(data => console.log("GET Response:", data))
//   .catch(error => console.log("Error:", error));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",   // method POST hai
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Muskan",
//     body: "Learning POST request",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log("POST Response:", data))
//   .catch(error => console.log("Error:", error));

// Simple GET request to fetch users and render them

// function loadProducts() {

//   fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//       let container = document.getElementById("products");
//       container.innerHTML = "";

//       data.forEach(product => {
//         let card = document.createElement("div");
//         card.className = "card";
//         card.innerHTML = `
//           <img src="${product.image}" alt="${product.title}">
//           <h3>${product.title}</h3>
//           <p>$${product.price}</p>
//         `;
//         container.appendChild(card);
//       });
//     })
//     .catch(err => console.log("Error:", err));
// }

// food recipes....................................
// function loadProducts() {
//   fetch("https://dummyjson.com/recipes")
//     .then((res) => res.json())
//     .then((data) => {
//       //       // .then(data => console.log(data))
//       let container = document.getElementById("products");
//       container.innerHTML = "";

//       data.recipes.forEach((recipe) => {
//         let card = document.createElement("div");
//         card.className = "card";
//         card.innerHTML = `
//           <img src="${recipe.image}" alt="${recipe.name}">
//           <h3>${recipe.name}</h3>
//           <p>Rating: ⭐ ${recipe.rating}</p>
//           <p>Prep Time: ${recipe.prepTimeMinutes} mins</p>
//           <p>Cook Time: ${recipe.cookTimeMinutes} mins</p>
         
//         `;
//         container.appendChild(card);
//       });
//     })

//     .catch((err) => console.log("Error:", err));
// }




// function loadUsers() {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     // .then((data) => {
//       .then(data => console.log(data))
//     //   let container = document.getElementById("users");
//     //   container.innerHTML = "";

//     //    data.users.forEach((user) => {
//     //     let card = document.createElement("div");
//     //     card.className = "card";
//     //       card.innerHTML = `
//     //       <img src="${user.image}" alt="${user.firstName}">
//     //       <h2>${user.firstName} ${user.lastName}</h2>
//     //     `;

//     //     container.appendChild(card);
//     //   });
//     // })

//     // .catch((err) => console.log("Error:", err));

//   }
//   loadUsers();


// let jsonString = '{"name": "Muskan", "age": 22}';

// let obj = JSON.parse(jsonString);
// console.log(obj)

// console.log(obj.name); // Muskan
// console.log(obj.age);  // 22

