import fs from "node:fs";

console.log("Start");

// Process - threads
fs.writeFile("rashid.txt", "Hello", () => {
  fs.readFile("rashid.txt", (e, d) => {
    console.log(d.toString());
    fs.appendFile("rashid.txt", "Hello", () => {
      fs.readFile("rashid.txt", (e, d) => {
        console.log(d.toString());
        fs.appendFile("rashid.txt", "Hello", () => {
          fs.readFile("rashid.txt", (e, d) => {
            console.log(d.toString());
            fs.appendFile("rashid.txt", "Hello", () => {
              fs.readFile("rashid.txt", (e, d) => {
                console.log(d.toString());
                fs.appendFile("rashid.txt", "Hello", () => {
                  fs.readFile("rashid.txt", (e, d) => {
                    console.log(d.toString());
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

console.log("End");
