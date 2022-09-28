import { addClass } from "../../attributes/class/add.att";
import { removeClass } from "../../attributes/class/remove.att.js";



const postImage = async ({ url, data }) => {

  try {

    console.log(url);

    const fd = new FormData();

    fd.append("canvas", data)

    return await fetch(url, {
        method: "POST",
      })
      .then((response) => response.json())
      .then((data) => { return data; })
      .catch((error) => { console.log(error) })
      .finally(() => {
        console.log("finally called");
      })
  } catch (err) {
    throw err;
  };

}


export {
  postImage,
}