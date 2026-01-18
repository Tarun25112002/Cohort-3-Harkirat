const fs = require("fs");
const path = require("path");

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function print(content) {
  console.log(content);
}

readFile(path.join(__dirname, "a.txt"))
  .then(print)
  .catch((err) => {
    console.error("Failed to read file:", err);
  });
