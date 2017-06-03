import './main.css'
import '../common/index'
if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  navigator.serviceWorker.register('/sw.js')
}
