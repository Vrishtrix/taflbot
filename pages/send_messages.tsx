import Link from "next/link"
import { useSession } from "next-auth/react"

const SendMessages = () =>
{
	const { data: session } = useSession()
	
	return (
		<div className="flex flex:col gap:25 min-h:100vh ai:center jc:center">
			<Link href="/">
				<button 
					className="block mx:auto b:2|solid|gray-50 r:5 p:0.75rem|1rem bg:gray-70:hover translateY(-2px):hover"
				>
					Go Back
				</button>
			</Link>
		</div>
	)
}

export default SendMessages