import * as React from 'react';
import Link from "next/link"
import { useSession } from "next-auth/react"
import contactFetcher from "@util/contact_fetcher"

interface IMessage {
	id: string;
	firstName: string;
	lastName: string;
};

const SendMessages = () => {
	const { data: session } = useSession();

	const [contacts, setContacts] = React.useState<IMessage[]>([]);

	React.useEffect(() => {
		contactFetcher(process.env.NEXT_PUBLIC_USER_TOKEN)
			.then(setContacts);
	}, []);

	if (!session) return <div className="flex flex:col gap:25 min-h:100vh ai:center jc:center"> Access denied. Please log in first. </div>

	if (!contacts) return <div className="flex flex:col gap:25 min-h:100vh ai:center jc:center"> Failed to fetch contacts... </div>

	return (
		<div className="flex flex:col gap:25 min-h:100vh ai:center jc:center">

			{contacts ? JSON.stringify(contacts) : "Invalid token provided."}
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