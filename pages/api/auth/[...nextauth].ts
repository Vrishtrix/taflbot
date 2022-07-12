import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth(
{
	secret: "QH7Bs8DudJmxWFHmaISndmawlj8/jQRMTotuW/HgzaA=",
	
	providers: [
		CredentialsProvider(
		{
			name: "Credentials",

			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" }
			},

			async authorize(credentials: { username: string; password: string })
			{
				if (credentials.username.toLowerCase() == "upeshp" && credentials.password === process.env.PASSWORD)
				{
					const user = 
					{ 
						id: 1, 
						name: "Upesh Patel", 
						email: "upesh_patel@tamsinfotech.com" ,
						token: process.env.USER_TOKEN
					}
					return user
				}

				return null
			}
		}
		)
	]
}
)