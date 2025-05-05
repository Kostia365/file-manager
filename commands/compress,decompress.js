import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createGzip, createGunzip } from 'zlib';
import { promisify } from 'util';

const pipe = promisify(pipeline);

export async function compress(args, currentDir) {
    const fileName = args[0];
    const filePath = path.join(currentDir, fileName);
    const gzipFilePath = path.join(currentDir, `${fileName}.gz`);

    try {
        await pipe(
            fs.createReadStream(filePath),
            createGzip(),
            fs.createWriteStream(gzipFilePath)
        );
        console.log(`Compressed ${fileName} to ${fileName}.gz`);
    } catch (err) {
        console.error('Error compressing file:', err);
    }
}

export async function decompress(args, currentDir) {
    const gzipFile = args[0];
    const outputFile = args[1];

    const gzipFilePath = path.join(currentDir, gzipFile);
    const outputFilePath = path.join(currentDir, outputFile);

    try {
        await pipe(
            fs.createReadStream(gzipFilePath),
            createGunzip(),
            fs.createWriteStream(outputFilePath)
        );
        console.log('File successfully decompressed');
    } catch (err) {
        console.error('Error decompressing file:', err);
    }
}
