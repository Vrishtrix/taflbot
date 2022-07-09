import axios from "axios"

const instance = axios.create(
{
	baseURL: "https://api.flock.co/v1/",
	timeout: 1000
}
)

export default instance