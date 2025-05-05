import fs from 'fs/promises';
import path from 'path';

export async function hash(args, corentDir) {
    const fileName = args[0];
    const filePath = path.join(corentDir, fileName);
    try {
        await fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK);
        const fileBuffer = await fs.readFile(filePath);
        const hash = require('crypto').createHash('sha256').update(fileBuffer).digest('hex');
        console.log(`Hash of ${fileName}: ${hash}`);
    }
    catch (error) {
        console.log("Error reading file")
    }
}