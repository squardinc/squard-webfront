// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
self.registration.showNotification("Hello, world!")
}, 15000)
const customRoute = new workbox.routing.NavigationRoute((props) => {
    console.log('routing!')
    console.log(props)
})
workbox.routing.registerRoute(customRoute)
