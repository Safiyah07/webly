import Stroke from "/stroke.svg";
import Project1 from "/project1.jpg";
import Project2 from "/project2.1.jpg";
import Project3 from "/project3.jpg";
import Project4 from "/project4.jpg";

function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col items-center justify-center w-full gap-12 sm:gap-5"
		>
			<div className="flex flex-col gap-7">
				<h2 className="leading-tight text-[50px] md:text-[40px] sm:text-[30px] text-center">
					<span className="">Our </span>
					<span className="">
						<span className="inline-block text-textFade">
							recent work
							<img
								src={Stroke}
								alt="emphasis stroke"
								className="w-[290px] md:w-[250px] sm:w-[180px]"
							/>
						</span>
					</span>
				</h2>
				<p className="text-center">
					We work hard to bring in quality leads.{" "}
					<br className="hidden sm:block" />
					Here’s what sets us apart:
				</p>
			</div>

			<div className="grid grid-cols-2 gap-10 md:grid-cols-1 sm:grid-cols-1 w-4/5 md:w-[88svw] sm:w-[88svw]">
				<div>
					<img
						src={Project1}
						className="border-4 rounded-xl border-blueNavBg/50"
						alt="First project preview"
					/>
				</div>
				<div>
					<img
						src={Project2}
						className="border-4 rounded-xl border-blueNavBg/50"
						alt="second project preview"
					/>
				</div>
				<div>
					<img
						src={Project3}
						className="border-4 rounded-xl border-blueNavBg/50"
						alt="third project preview"
					/>
				</div>
				<div>
					<img
						src={Project4}
						className="border-4 rounded-xl border-blueNavBg/50"
						alt="fourth project preview"
					/>
				</div>
			</div>
		</section>
	);
}

export default Projects;
