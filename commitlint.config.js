// module.exports = { extends: ["@commitlint/config-conventional"] };
module.exports = {
  extends: ["gitmoji"],
  rules: {
    "header-max-length": [0, "always", 100],
  },
};
