// prepareImages.js
const fs = require("fs");
const files = fs.readdirSync("./assets/images/dances/rare").filter(x => x.includes("jpg"));
const ex =
  "{\n" +
  files.map(x => `"${x.split(".png")[0]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("./assets/images/dances/rare/index.js", res);