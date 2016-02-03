module.exports = function (conf) {

    conf.registerPreset('bem', require('../presets/bem.json'));
    conf.registerPreset('canonical-bem', require('../presets/canonical-bem.json'));
    conf.registerPreset('bem-tools', require('../presets/bem-tools.json'));

};
