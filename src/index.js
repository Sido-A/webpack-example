import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
// import Test from "./test.jpg";
// import Data from "./data.xml";
// import Notes from "./data.csv";
// import toml from "./data.toml";
// import yaml from "./data.yaml";
// import json from "./data.json5";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack "], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  // element.classList.add("hello");

  //   const myImage = new Image();
  //   myImage.src = Test;
  //   element.appendChild(myImage);

  // console.log(toml.title); // output `TOML Example`
  // console.log(toml.owner.name); // output `Tom Preston-Werner`

  // console.log(yaml.title); // output `YAML Example`
  // console.log(yaml.owner.name); // output `Tom Preston-Werner`

  // console.log(json.title); // output `JSON5 Example`
  // console.log(json.owner.name); // output `Tom Preston-Werner`
  //   console.log(Data);
  //   console.log(Notes);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();

    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
