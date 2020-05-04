export default [
  {
    url: '/nui-mobile/user/login',
    type: 'post',
    response: () => {
      const token = 'i am a token'

      // mock error
      if (!token) {
        return {
          code: 401,
          msg: 'Account or password are incorrect.',
        }
      }

      return {
        code: 200,
        msg: 'success',
        data: token
      }
    }
  }
]
