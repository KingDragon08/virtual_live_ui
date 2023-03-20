const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@types": path.resolve(__dirname, "src/types"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@consts": path.resolve(__dirname, "src/consts"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@services": path.resolve(__dirname, "src/services"),
        }
    }
};
