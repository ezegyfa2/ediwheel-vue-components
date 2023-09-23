export default {
    install(Vue) {
        window.templates.ediwheel_team_member = require('./Template').default
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/ButtonLink2').default.install(Vue)
        
        registerVueComponent(
            'ediwheel-team-member', 
            require('./Component.vue').default,
            Vue
        )
    }
}