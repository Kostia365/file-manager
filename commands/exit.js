export const handleExit = (username, rl) => {
    console.log(`Thank you for using File Manager, ${username}!`);
    rl.close();
    process.exit(0);
};