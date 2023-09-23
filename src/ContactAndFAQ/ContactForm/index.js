export default {
    install(Vue) {
        window.templates.ediwheel_contact_form = require('./Template').default
        require('./Form').default.install(Vue)
        require('./FormItems').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/TextContents/WhiteMediumTextContent').default.install(Vue)
    }
}