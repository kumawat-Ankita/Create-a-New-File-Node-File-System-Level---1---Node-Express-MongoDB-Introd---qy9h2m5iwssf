const fs = require("fs/promises");

const fileName = "myfile.txt";
const fileContent = "Newton School";

const writeFile = async (fileName, fileContent) => {
  try {
    // Write the file with the given file name and content
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} created successfully.`);
  } catch (error) {
    console.error(`Error creating ${fileName}:`, error);
  }
};

module.exports = { writeFile };
