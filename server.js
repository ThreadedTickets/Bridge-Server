const { Bridge } = require("discord-cross-hosting");
require("dotenv").config();

const server = new Bridge({
  port: parseInt(process.env["PORT"]),
  authToken: process.env["AUTH_TOKEN"],
  totalShards: "auto", // The Total Shards of the Bot or 'auto'
  totalMachines: 1, // The Total Machines, where the Clusters will run
  shardsPerCluster: 16, // The amount of Internal Shards, which are in one Cluster
  token: process.env["DISCORD_TOKEN"],
});

server.on("debug", console.log);
server.start();
server.on("ready", (url) => {
  console.log("Server is ready" + url);
});
