export default {
    install(Vue) {
        window.templates.ediwheel_description = require('./Template').default
        require('./Container').default.install(Vue)
        require('./Description').default.install(Vue)
        require('./TextContent').default.install(Vue)
        require('./Table').default.install(Vue)
        require('./BlackLargeTextContent').default.install(Vue)
    }
}