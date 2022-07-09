import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Home = () =>
{
	const { data: session } = useSession()

	if (!session)
	{
		return (
			<div className="flex flex:col gap:25 min-h:100vh ai:center jc:center">
				Not logged in!

				<button 
					className="block mx:auto b:2|solid|gray-50 r:5 p:0.75rem|1rem bg:gray-70:hover translateY(-2px):hover"
					onClick={() => signIn()}
				>
					Log In
				</button>
			</div>
		)
	}

	return (
		<div className="flex flex:col gap:25 min-h:100vh ai:center jc:center">
			Signed in as {session.user.name}!

			<Link href="/send_messages">
				<button 
					className="block mx:auto b:2|solid|gray-50 r:5 p:0.75rem|1rem bg:gray-70:hover translateY(-2px):hover"
				>
					Send Messages
				</button>
			</Link>

			<button 
				className="block mx:auto b:2|solid|gray-50 r:5 p:0.75rem|1rem bg:gray-70:hover translateY(-2px):hover"
				onClick={() => signOut()}
			>
				Log Out
			</button>
		</div>
	)
}

export default Home