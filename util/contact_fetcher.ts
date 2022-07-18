import instance from "@util/axios_instance"

const contactFetcher = async (token : String) =>
{
	const { data } = await instance.post(
		"/roster.listContacts",
		{
			token
		}
	)

	return data
}

export default contactFetcher