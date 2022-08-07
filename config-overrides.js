// // eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const { override, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        styles: path.resolve(__dirname, 'src/styles'),
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    }),
);
