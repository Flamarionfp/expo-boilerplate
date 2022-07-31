module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            constants: "./src/constants",
            contexts: "./src/contexts",
            helpers: "./src/helpers",
            hooks: "./src/hooks",
            routes: "./src/routes",
            screens: "./src/screens",
            services: "./src/services",
            types: "./src/types",
          },
        },
      ],
    ],
  };
};
