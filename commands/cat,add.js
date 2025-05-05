import path from 'path';
import fs from 'fs/promises';

export async function cat(args, corentDir) {
    const fileName = args[0];
    const filePath = path.join(corentDir, fileName);
    try {   
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log(fileContent);
    }
    catch (error) {
        console.log("Error reading file")
    }
    return corentDir;}

export async function add(args, corentDir) {
    const fileName = args[0];
    const filePath = path.join(corentDir, fileName);
    try {
        await fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK);
        console.log(`File ${fileName} already exists`)
    }
    catch (error) {
        console.log(`Creating file ${fileName}`)
        await fs.writeFile(filePath, '', 'utf-8');
    }
    return corentDir;
}