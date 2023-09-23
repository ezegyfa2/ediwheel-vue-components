export default {
    install(Vue) {
        window.templates.ediwheel_team = require('./Template').default
        require('./Team').default.install(Vue)
        require('./Member').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/TextContents/MediumTextContent').default.install(Vue)
    }
}