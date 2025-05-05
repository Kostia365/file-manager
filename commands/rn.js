import fs from 'fs/promises';
import path from 'path';

export async function rn(args, corentDir) {
    const oldFileName = args[0];
    const newFileName = args[1];
    const oldFilePath = path.join(corentDir, oldFileName);
    const newFilePath = path.join(corentDir, newFileName);
    try {
        await fs.access(oldFilePath, fs.constants.R_OK | fs.constants.W_OK);
        await fs.rename(oldFilePath, newFilePath);
        console.log(`Renamed ${oldFileName} to ${newFileName}`)
    } catch (error) {
        console.log("Error renaming file")
    }
    return corentDir;
}
