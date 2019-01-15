module.exports = function (api) {
  api.cache(true);
  const presets = [
    [require('@babel/preset-env'), { loose: true }],
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
}