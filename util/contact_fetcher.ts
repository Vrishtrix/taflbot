import instance from "@util/axios_instance"

const contactFetcher = (token : String) =>
{
	const data = instance.post(
		"/roster.listContacts",
		{
			token
		}
	)
	.then(res => res.data)
	.catch(err => err)
	
	return data
}

export default contactFetcher