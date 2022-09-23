
// import { addClass } from "../../attributes/class/add.att";
// import { removeClass } from "../../attributes/class/remove.att.js";

// /**
//  * fetch data in type string and to params in url
//  * @param {Object} obj  and element and name class  for amination [ element , name class ]
//  * @return {Object | undefined} Promise resolved when data is fetched
//  * 
//  */

// const postImage = async ({ url, data }) => {

//   try {

//     console.log(url);

//     const fd = new FormData();

//     fd.append("canvas", data)

//     return await fetch(url, {
//         method: "POST",
//       })
//       .then((response) => response.json())
//       .then((data) => { return data; })
//       .catch((error) => { console.log(error) })
//       .finally(() => {
//         console.log("finally called");
//       })
//   } catch (err) {
//     throw err;
//   };

// }


// export {
//   postImage,
// }