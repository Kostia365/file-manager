import path from 'path';
import fs from 'fs/promises';

export async function ls(corentDir) {
    try {
        const files = await fs.readdir(corentDir);
        console.log(files.join("\n"));
    } catch (error) {
        console.log("Error reading directory")
    }
    return corentDir;
}
export async function cd(corentDir) {
    const newDir = await rl.question("Enter the directory name: ");
    const newPath = path.join(corentDir, newDir);
    try {
        await fs.access(newPath, fs.constants.R_OK | fs.constants.W_OK);
        corentDir = newPath;
        console.log(`You are in ${corentDir}`)
}
catch (error) {
        console.log("Invalid directory")
    }
    return corentDir;
}
export async function up(corentDir) {
    const newPath = path.dirname(corentDir);
    try {
        await fs.access(newPath, fs.constants.R_OK | fs.constants.W_OK);
        corentDir = newPath;
        console.log(`You are in ${corentDir}`)
    }
    catch (error) {
        console.log("Invalid directory")
    }
    return corentDir;
}