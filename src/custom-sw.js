const customRoute = new workbox.routing.NavigationRoute((props) => {
    console.log('routing!')
    console.log(props)
})
workbox.routing.registerRoute(customRoute)
