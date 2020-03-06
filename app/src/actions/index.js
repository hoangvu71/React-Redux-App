import axios from "axios"

export const getAdvice = () => dispatch => {
    dispatch({ type: 'LOADING' });
    axios
    .get("https://api.adviceslip.com/advice")
    .then(res => {
        console.log("Success!", res);
        dispatch( { type: 'LOADED', payload: res.data.slip.advice })
})
    .catch(err => console.log("Error in axios", err))
}