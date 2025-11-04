import BitManipulation from "components/concepts/BitManipulation";
import Memory from "components/concepts/Memory";
import ObjectOriented from "components/concepts/ObjectOriented";
import SystemDesignScalability from "components/concepts/SystemDesignScalability";
import Testing from "components/concepts/Testing";

export default function Concepts() {
	return (
		<>
			<h1 className="archivo-black-regular">Concepts</h1>
			<BitManipulation />
			<Memory />
			<ObjectOriented />
			<SystemDesignScalability />
			<Testing />
		</>
	);
}