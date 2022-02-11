export const loginStart = () => ({
    type: "LOGIN_START"
})
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCCESS",
    payload: user
})
export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
})