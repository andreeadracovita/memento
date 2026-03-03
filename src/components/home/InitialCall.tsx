import { useState } from "react";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function InitialCall() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="grey-card">
			<CardHeader
				title={"1 Initial Call"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><Accent>Initial call (~30 min)</Accent>: call with recruiter, talk about job description, share my background.</p>
					<hr />
					<p>Hi, I'm <Accent>Andreea</Accent>.</p>
					<p>I work at Adobe Romania on an online app for content creation & editing named Express. I am part of the <Accent>Typography team</Accent> and my work spanned from low-level typographic features to AI generated text effects. Think: justification, text object handles (scale, move), spellchecking, mobile experience, GenAI textures, prompt engineering.</p>
					<p>I am a <Accent>visual person</Accent>. I work better when I visualize my results. Thus, my Master's degree choice and first job focused on Computer Graphics and 3D Rendering. However fascinating the 3D world, it was not really solving problems and enhancing people's skills, and the area of influence is entertainment and leisure. <Accent>I am into organised thinking, managing time and resources, and solving active problems</Accent>. This is what really makes people's lives better, easier, and ultimately makes me <Accent>glad to be a part of it all</Accent>.</p>
					<p>I see web development as a powerful, quick and visual tool to build any type of application, which can reach anyone, regardless of their device.</p>
					<p>Apart from work, which is mostly about a huge code base and system, where one as a developer works on a relatively small area, I worked on personal projects for the web. The most recent one is a <Accent>React Web App for travel</Accent>/accommodation booking, named <Accent>Lodge</Accent>. It is currently live with some mock locations. It could actually be used for booking, but without payment. This one has a <Accent>Node backend</Accent>. I previously created an <Accent>Online Banking App with a Java Backend</Accent> (using Spring framework).</p>
					<p>Building the Travel App was very <Accent>rewarding</Accent> for me. I started from scratch with a few inspirations. I created the <Accent>prototype, designed the user experience, data base and UI</Accent>. Like one does, I wasted a few days on the color scheme and the logo design, constantly trying to remind myself those are not important (yet). <Accent>I can't help but get invested in what I do</Accent>. I especially loved <Accent>planning</Accent> the work to cover all grounds, instead of overly focusing on one part of the site. There were also some challenges, for example deploying the app and choosing where to host it. <Accent>I loved the full experience</Accent>.</p>
				</>
			}
		</div>
	);
}