const userDB = []

let  baseId = 1

const findAllUser = async () => {
   return await userDB
}

const findUserById = async (id) => {
    const filteredUser = await userDB.find(user => user.id === id)
    return filteredUser
}

const createNewUser = async (userObj) => {
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age
    }

    await userDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUser,
    findUserById,
    createNewUser
}