export default function Card({ title, body }) {
	
	return (
		<div className="grey-card p-4 my-4">
			<p className="fw-bold fs-5">{title}</p>
			<p>{body}</p>
		</div>
	);
}