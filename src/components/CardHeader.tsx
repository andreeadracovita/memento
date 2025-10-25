import { FaChevronDown, FaChevronUp, FaLink } from "react-icons/fa";

interface CardHeaderProps {
	title: string;
	link?: string;
	toggle: boolean;
	handleToggle: any;//() => void;
}

export default function CardHeader({ title, link, toggle, handleToggle }: CardHeaderProps) {
	return (
		<div className="card-title row">
			<div className="col-auto">
			{
				link === undefined
				? <span>{title}</span>
				: <a href={link} target="_blank" className="title-anchor">
					{title} <span className="suprascript"><FaLink /></span>
				</a>
			}
			</div>
			<div className="col text-end clickable" onClick={handleToggle}>
			{
				toggle === false
				? <FaChevronDown />
				: <FaChevronUp />
			}
			</div>
		</div>
	);
}