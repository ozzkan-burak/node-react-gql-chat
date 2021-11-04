module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          id:1,
          username: 'shoshin',
          email: 'shoshin@shoshin.com'
        },
        {
          id:2,
          username: 'shoshin1',
          email: 'shoshin1@shoshin.com'
        }
      ]

      return users
    }
  },
};