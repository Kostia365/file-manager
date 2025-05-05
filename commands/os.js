import os from "os";

export const handleOS = async (args) => {
    if (args[0] === "--EOL") {
      console.log(JSON.stringify(os.EOL));
    } else if (args[0] === "--cpus") {
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);
      cpus.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`);
      });
    } else if (args[0] === "--homedir") {
      console.log(os.homedir());
    } else if (args[0] === "--username") {
      console.log(os.userInfo().username);
    } else if (args[0] === "--architecture") {
      console.log(os.arch());
    } else {
      console.log(
        "Invalid input. Try to add --EOL, --cpus, --homedir, --username, or --architecture."
      );
    }
  };