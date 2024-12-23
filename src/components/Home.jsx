import { gsap } from "gsap";
import { useEffect } from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import {
	IoCalendarOutline,
	IoStarOutline,
	IoBarChartOutline,
	IoShieldCheckmarkOutline,
} from "react-icons/io5";
import Stroke from "/stroke.svg";
import Project from "/project4.jpg";
import Button from "./../shared/Button";

function Home() {
	useEffect(() => {
		gsap.fromTo(
			".hero",
			{ opacity: 0, duration: 0, y: 40 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.5,
			}
		);
	}, []);

	const services = [
		{ icon: <IoStarOutline />, name: "Professional web design" },
		{ icon: <HiOutlineUserGroup />, name: "35% more website traffic" },
		{ icon: <IoBarChartOutline />, name: "20% more monthly revenue" },
		{ icon: <IoShieldCheckmarkOutline />, name: "Quality lead generation" },
	];

	return (
		<section
			id="home"
			className="flex flex-col items-center justify-center pt-10"
		>
			<div className="w-full md:pb-10 sm:pb-10">
				<h4 className="pb-8 text-sm text-center uppercase sm:text-xs sm:pb-4">
					For HVAC Companies
				</h4>
				<div className="flex flex-col items-center gap-8">
					<div className="leading-tight text-[50px] md:text-[40px] sm:text-[25px] text-center">
						<h1 className="">
							<span className="hero">
								Trusted websites that <br />
							</span>
							<span className="hero">
								<span>converts</span>{" "}
								<span className="inline-block text-textFade">
									leads to clients
									<img
										src={Stroke}
										alt="emphasis stroke"
										className="w-[370px] md:w-[300px] sm:w-[187px]"
									/>
								</span>
							</span>
						</h1>
					</div>
					<ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-20">
						{services.map((service, index) => (
							<li key={index}>
								<div className="flex items-center gap-4 hero">
									{service.icon} {service.name}
								</div>
							</li>
						))}
					</ul>
					<Button>
						<a
							href="https://calendly.com/safiyahmasud/website-intro-call-with-safiyah"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2"
						>
							<IoCalendarOutline /> Book a Call
						</a>
					</Button>
				</div>
			</div>
			<div className="w-[56%] max-md:w-2/3 pt-20 md:w-3/4 sm:w-[88%]">
				<img
					src={Project}
					alt="projects preview"
					className="border-4 rounded-xl border-blueNavBg/50"
				/>
			</div>
		</section>
	);
}

export default Home;
