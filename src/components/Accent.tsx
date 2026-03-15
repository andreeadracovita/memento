type AccentProps = {
	children: any
};

export default function Accent({ children }: AccentProps) {
	
	return <span className="sharpie-highlight">{children}</span>
}