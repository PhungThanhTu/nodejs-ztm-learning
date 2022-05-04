const mission = process.argv[2];

if(mission === "learn") {
    console.log("time to write some Node app");
}
else {
    console.log(`Is ${mission} really more fun ?`);
}
console.log(process.argv);
