module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-equip`
  extends: ['equip'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
