import fs from "fs";

const writeFile = async(filePath, data) => {
    await new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
export default writeFile;