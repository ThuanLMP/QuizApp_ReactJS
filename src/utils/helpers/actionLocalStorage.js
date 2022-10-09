
const setUser = (user) => {
    const jsonUser = JSON.stringify(user)
    localStorage.setItem('user', jsonUser)
}

const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export const LocalStorage = {
    setUser,
    getUser
}