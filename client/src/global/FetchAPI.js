import cookie from "js-cookie";
const URL = "http://localhost:9000/api";

export const Register = (user) => {
    return fetch(`${URL}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};








