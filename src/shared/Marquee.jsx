import Marquee from "react-fast-marquee";
import Button from "./Button";
import { IoCalendarOutline } from "react-icons/io5";

function Marqueee() {
	return (
		<section className="bg-chooseFade">
			<Marquee
				speed={100}
				autoFill={true}
				pauseOnHover={true}
				gradientColor={"#f7f3f2"}
				// style={{
				// 	animationDuration: "8s",
				// }}
			>
				<div className="flex items-center gap-2 py-5 font-medium uppercase md:py-3 mx-7">
					<h1 className="lg:text-[50px] max-md:text-[50px] md:text-[50px] sm:text-[40px] leading-[150%]">
						Get in touch.
					</h1>
					<Button>
						<a
							href="mailto:safiyahmasud@gmail.com"
							className="flex items-center justify-center gap-2"
						>
							<IoCalendarOutline /> Book a Call
						</a>
					</Button>
				</div>
			</Marquee>
		</section>
	);
}

export default Marqueee
