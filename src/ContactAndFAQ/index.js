export default {
    install(Vue) {
        window.templates.ediwheel_contact_and_faq = require('./Template').default
        require('./ContactForm').default.install(Vue)
        require('./FAQ').default.install(Vue)
        require('ediwheel-vue-components/LayoutWithHeader').default.install(Vue)
    }
}