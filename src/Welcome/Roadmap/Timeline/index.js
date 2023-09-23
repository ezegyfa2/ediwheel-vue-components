export default {
    install(Vue) {
        require('./Timeline').default.install(Vue)
        require('./TimelineItem').default.install(Vue)
    }
}