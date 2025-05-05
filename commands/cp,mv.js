import fs from 'fs/promises';
import path from 'path';

export async function cp(args, corentDir) {
    const sourceFileName = args[0];
    const destinationFileName = args[1];
    const sourceFilePath = path.join(corentDir, sourceFileName);
    const destinationFilePath = path.join(corentDir, destinationFileName);
    try {
        await fs.access(sourceFilePath, fs.constants.R_OK | fs.constants.W_OK);
        await fs.copyFile(sourceFilePath, destinationFilePath);
        console.log(`Copied ${sourceFileName} to ${destinationFileName}`)
    } catch (error) {
        console.log("Error copying file")
    }
    return corentDir;
}
export async function mv(args, corentDir) {
    const sourceFileName = args[0];
    const destinationFileName = args[1];
    const sourceFilePath = path.join(corentDir, sourceFileName);
    const destinationFilePath = path.join(corentDir, destinationFileName);
    try {
        await fs.access(sourceFilePath, fs.constants.R_OK | fs.constants.W_OK);
        await fs.rename(sourceFilePath, destinationFilePath);
        console.log(`Moved ${sourceFileName} to ${destinationFileName}`)
    } catch (error) {
        console.log("Error moving file")
    }
    return corentDir;
}