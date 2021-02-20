const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@layouts': 'src/layouts',
        '@views': 'src/views',
        '~': 'src'
    })(config)

    return config
}