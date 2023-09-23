export default {
    install(Vue) {
        window.templates.ediwheel_navigation_bar = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./NavigationLink').default.install(Vue)
        require('./DropdownNavigationLink').default.install(Vue)
    }
}