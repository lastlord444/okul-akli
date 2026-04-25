const { withGradleProperties } = require('expo/config-plugins');

const withKotlinVersion = (config) => {
  return withGradleProperties(config, (config) => {
    const propertyName = 'android.kotlinVersion';
    const propertyValue = '1.9.24';

    const index = config.modResults.findIndex(
      (prop) => prop.type === 'property' && prop.key === propertyName
    );

    if (index !== -1) {
      config.modResults[index].value = propertyValue;
    } else {
      config.modResults.push({
        type: 'property',
        key: propertyName,
        value: propertyValue,
      });
    }

    return config;
  });
};

module.exports = withKotlinVersion;
