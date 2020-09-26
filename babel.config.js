module.exports = function(api) {
  if(typeof api === 'function') {
    api.cache(true);
  }
  return {
    presets: ['babel-preset-expo'],
  };
};
