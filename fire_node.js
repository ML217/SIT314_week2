// fire_node.js
const net = require("net");
const host = "127.0.0.1";
const port = 6000;


// Fire warning levels
const fireLevels = ["NO RATING", "MODERATE", "HIGH", "EXTREME", "CATASTROPHIC"];
// Victorian regions
const regions = [
    "Mallee", "Wimmera", "South West", "Northern Country", "North Central",
    "Central", "North East", "East Gippsland", "West and South Gippsland"
];

const client = net.createConnection(port, host, () => {
    console.log("Connected to Fire Service");

    setInterval(() => {
        const region = regions[Math.floor(Math.random() * regions.length)];
        const level = fireLevels[Math.floor(Math.random() * fireLevels.length)];
        client.write(`fire ${region}:${level}`);
    }, 5000); // every 5 seconds
});

client.on("data", (data) => {
    console.log(`Weather Server Response: ${data}`);
});