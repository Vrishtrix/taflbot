import instance from "@util/axios_instance"

const contactFetcher = async (token: String) => {
	return instance.post(
		"/roster.listContacts",
		{
			token
		}
	);
}

export default contactFetcher