import concurrently from "concurrently";

concurrently(
  [
    { command: "tsc --watch", name: "tsc" },
    { command: "node --watch ./bin/cltodo.js", name: "node" },
  ],
  {
    raw: true,
    killOthers: ["failure", "success"],
  }
);
