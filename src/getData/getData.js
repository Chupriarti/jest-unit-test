const axios = require('axios')

const getData = () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userIds = response.data.map(user => user.id)
    return userIds
}
