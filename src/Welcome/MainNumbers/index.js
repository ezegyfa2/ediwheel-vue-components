export default {
    install(Vue) {
        window.templates.ediwheel_main_numbers = require('./Template').default
        require('./MainNumbers').default.install(Vue)
        require('./TextContent').default.install(Vue)
    }
}