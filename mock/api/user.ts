export default [
  {
    url: '/nui-mobile/user/login',
    type: 'post',
    response: () => {
      const data = {
        token: 'admin',
        headimgurl: 'http://img.qqzong.com/zt.hao661.com/uploads/allimg/150629/1243063q6-0.jpg'
      }

      // mock error
      if (!data) {
        return {
          code: 401,
          msg: 'Account or password are incorrect.',
        }
      }

      return {
        code: 200,
        msg: 'success',
        data: data
      }
    }
  }
]
