export default function ({ app, route, redirect }) {
    // check if the user has a session
    const hasSession = app.$auth.$state.loggedIn
  
    // if the user is not logged in and is not already on the login page,
    // redirect them to the login page
    if (!hasSession && route.path !== '/login') {
        return redirect('/login')
    }
}
  