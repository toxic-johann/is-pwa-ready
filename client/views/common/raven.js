let Raven
if(process.env.NODE_ENV === 'production') {
  Raven = require('raven-js')
  Raven.config('https://9bd060da7aa44954b3c6ced68ffd00cc@sentry.io/173014').install()
  window.addEventListener('unhandledrejection', function (event) {
    Raven.captureException(event.reason)
    console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason)
  })
} else {
  Raven = {
    context: {},
    setUserContext (context) {
      Object.assign(this.context, context)
    },
    captureMessage (msg, {level = 'error'} = {}) {
      console[level]
        ? console[level](msg, this.context)
        : console.log(msg, this.context)
    }
  }
}

export default Raven
