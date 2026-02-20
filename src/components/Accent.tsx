type AccentProps = {
	children: any
};

export default function Accent({ children }: AccentProps) {
	
	return <span className="bold highlight">{children}</span>
}