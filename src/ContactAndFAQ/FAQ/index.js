export default {
    install(Vue) {
        window.templates.ediwheel_faq = require('./Template').default
        require('./FAQ').default.install(Vue)
		require('./Item').default.install(Vue)
		require('ediwheel-vue-components/GlobalComponents/TextContents/MediumTextContent').default.install(Vue)
    }
}