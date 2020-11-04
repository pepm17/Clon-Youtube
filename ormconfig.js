const { resolve } = require("path");

module.exports = {
  name: "default",
  type: "mongodb",
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: false,
  logging: false,
  entities: [resolve(__dirname, "src/models/v1/*{.ts,.js}")],
};
