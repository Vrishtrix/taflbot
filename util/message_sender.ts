import instance from '@util/axios_instance'

const messageSender = async (to : String, text : String, token : String) =>
{
	const { data, status } = await instance.post(
		"/chat.sendMessage",
		{
			token, to, text
		}
	)

	return status
}

export default messageSender