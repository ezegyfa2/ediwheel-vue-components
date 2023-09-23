export default {
    install(Vue) {
        window.templates.ediwheel_roadmap = require('./Template').default
        require('./Roadmap').default.install(Vue)
        require('./Timeline').default.install(Vue)
        require('./MediumTextContent').default.install(Vue)
        require('./TwoTitleTextContent').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/TextContents/SmallTextContent').default.install(Vue)
    }
}