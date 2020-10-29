const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
  console.log(event)
})
workbox.routing.registerRoute(customRoute)
