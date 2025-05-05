import fs from 'fs/promises';
import path from 'path';

export async function mkdir(args, corentDir) {
    const dirName = args[0];
    const dirPath = path.join(corentDir, dirName);
    try {
        await fs.access(dirPath, fs.constants.R_OK | fs.constants.W_OK);
        console.log(`Directory ${dirName} already exists`)
    } catch (error) {
        console.log(`Creating directory ${dirName}`)
        await fs.mkdir(dirPath, { recursive: true });
    }
    return corentDir;
}
export async function rm(args, corentDir) {
    const dirName = args[0];
    const dirPath = path.join(corentDir, dirName);
    try {
        await fs.access(dirPath, fs.constants.R_OK | fs.constants.W_OK);
        await fs.rmdir(dirPath, { recursive: true });
        console.log(`Removed directory ${dirName}`)
    } catch (error) {
        console.log("Error removing directory")
    }
    return corentDir;
}