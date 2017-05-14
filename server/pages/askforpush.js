const webpush = require('web-push')
module.exports = async function () {
  this.body = 'ok, i send it'
  const {endpoint, auth, p256dh} = this.request.body
  const options = {
    TTL: 24 * 60 * 60,
    vapidDetails: {
      subject: 'mailto:sender@example.com',
      publicKey: 'BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo',
      privateKey: 'pFTDOvDu9zeG_-BNCEk9CUkgzd5XshH8Sk9QFkzAXJU'
    },
    headers: {
      'Authorization': 'key=AAAAvxKDXhg:APA91bEVV6bb2s2c6CE8Xsw0H5Jv8jwb1dSaf_oT6eZL3rKtl2dYrox1E7rahH5qrSYJ7pKhquhFYorFc64e48srojpB_fBXa6uxXNTg1zzF0jliNGm0ADDi11mjdI1TaIONDcIKSIkx'
    }
  }
  const pushSubscription = {
    endpoint,
    keys: {
      auth,
      p256dh
    }
  }
  webpush.sendNotification(pushSubscription, JSON.stringify({
    title: '看看这个浏览器能不能推送？',
    body: '可以哦'
  }), options)
  return
}
