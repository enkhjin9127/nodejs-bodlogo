const fs = require("fs");

// jishee

// fs.writeFile("enkhjin.txt", "ENJIIIIIIIIIIII", (err) => {
//   if (err) {
//     console.error("Error creating the file:", err);
//     return;
//   }
//   console.log("File created successfully!");
// });

// teams bodlogo 1

// fs.readFile("enkhjin.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Could not read the file:", err);
//     return;
//   }
//   //   console.log(data);
//   const words = data.split(" ");
//   //   console.log(words);
//   const searchWord = "banana";
//   const index = words.indexOf(searchWord);
//   console.log(index);
//   if (words[index + 1]) {
//     console.log("The word after", searchWord, "is:", words[index + 1]);
//   } else {
//     console.log("Word not found or no word after it.");
//   }
// });

// teams bodlogo 2

// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error reading the directory:", err);
//     return;
//   }
//   console.log("Files and directories:");
//   files.forEach((file) => console.log(file));
// });

// teams bodlogo 3

// Read content of file1.txt
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) {
    console.error("Error reading file1.txt:", err);
    return;
  }

  // Read content of file2.txt
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) {
      console.error("Error reading file2.txt:", err);
      return;
    }

    // Merge the contents
    const mergedContent = data1 + "\n" + data2;

    // Write to merged.txt
    fs.writeFile("merged.txt", mergedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to merged.txt:", err);
        return;
      }
      console.log("Files merged successfully into merged.txt");
    });
  });
});
