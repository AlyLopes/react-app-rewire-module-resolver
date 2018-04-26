const { injectBabelPlugin } = require('react-app-rewired');

function rewireModuleResolver(config, env, moduleResolverOptions = {}) {
  config = injectBabelPlugin(
    ['module-resolver', moduleResolverOptions],
    config
  );
  return config;
}

module.exports = rewireModuleResolver;
