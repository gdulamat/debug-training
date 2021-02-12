import { loginDB, passDB } from './fakedb'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (req, res, next) {
  const url = new URLSearchParams(req.url.split('?')[1])
  if (req.url.includes('/admin')) {
    const user = url.get('user')
    const pass = url.get('pass')
    if (user === loginDB && pass === passDB) {
      // logged in
      console.log(`Admin logged in: ${new Date()}`)
    }
  }
  next()
}
