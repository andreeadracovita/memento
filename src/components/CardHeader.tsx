import { useRef } from "react";
import { FaChevronDown, FaChevronUp, FaLink } from "react-icons/fa";

interface CardHeaderProps {
	title: string;
	link?: string;
	toggle: boolean;
	handleToggle: any;//() => void;
}

export default function CardHeader({ title, link, toggle, handleToggle }: CardHeaderProps) {
	const ref = useRef<HTMLSpanElement>(null);

	const scrollAtCollapse = () => {
		if (toggle === true && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
		handleToggle();
	};

	return (
		<>
			<span ref={ref}></span>
			<div className="card-header card-title row">
				<div className="col-auto">
				{
					link === undefined
					? <span>{title}</span>
					: <a href={link} target="_blank" className="title-anchor">
						{title} <span className="suprascript"><FaLink /></span>
					</a>
				}
				</div>
				<div className="col text-end clickable" onClick={scrollAtCollapse}>
				{
					toggle === false
					? <FaChevronDown />
					: <FaChevronUp />
				}
				</div>
			</div>
		</>
	);
}