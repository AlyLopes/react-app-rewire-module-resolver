# `react-app-rewire-module-resolver`
Adds the [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) to your create-react-app via [react-app-rewired](https://github.com/timarney/react-app-rewired)


## Installation

```
npm install --save-dev react-app-rewire-module-resolver
```
or
```
yarn add --dev react-app-rewire-module-resolver
```

## Usage

```js
/* config-overrides.js */
const rewireModuleResolver = require('react-app-rewire-module-resolver');

module.exports = function override(config, env) {
  const moduleResolverOptions = {
    root: ['./src'],
    alias: {
      test: './test',
      underscore: 'lodash',
    },
  };

  config = rewireModuleResolver(config, env, moduleResolverOptions);
  return config;
};
```

See [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) for more config details

## License

Licensed under the MIT License, Copyright (c) 2018 Alysson. See [LICENSE.md](LICENSE.md) for more information.
