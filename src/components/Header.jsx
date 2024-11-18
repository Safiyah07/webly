import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { IoCalendarOutline } from "react-icons/io5";
import Button from "../shared/Button";
import Logo from "/webly-logo.png";

function Header() {
	const [showMenu, setShowMenu] = useState(true);

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState);
	};

	const nav = [
		{
			name: "home",
			link: "#top",
		},
		{
			name: "services",
			link: "#services",
		},
		{
			name: "projects",
			link: "#projects",
		},
	];

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<section id="top">
			<div className="py-3 text-center bg-blueNavBg/10 sm:text-xs">
				✨ We’re now taking new projects, book an intro call today! 📞
			</div>

			<section
				className={`pt-7 pb-16 px-20 m-auto md:px-5 sm:px-5 sm:pt-4 sm:pb-12 wid h-14`}
			>
				<div className="w-full h-0">
					<div className="flex items-center justify-between">
						<Link
							to="/"
							onClick={() => setShowMenu(true)}
						>
							<img
								src={Logo}
								alt="webly-logo"
								className="h-full w-36 sm:w-28"
							/>
						</Link>
						{/* Desktop menu */}
						<div className="relative flex items-center w-auto h-full gap-10 text-base md:hidden sm:hidden">
							{nav.map((item, id) => (
								<a
									key={id}
									href={`/${item.link}`}
									className={` capitalize hover:font-medium transition-all ease-in-out duration-300`}
								>
									{item.name}
								</a>
							))}

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

						{/* From here down is code for late, md/sm navigation and so on */}
						{/* md and sm menu btn */}
						<div
							onClick={menuDisplay}
							className="font-normal cursor-pointer lg:hidden max-md:hidden"
						>
							{showMenu ? <Hamburger size={23} /> : <Hamburger size={23} />}
						</div>
					</div>

					{/* md and sm menu */}
					<div
						className={`${
							showMenu ? "-top-[1000px]" : "top-0"
						} flex flex-col items-center justify-center gap-16 h-svh rounded-xl p-5 bg-bg sm:my-0 sm:p-0 sm:h-[85svh] text-2xl lg:hidden max-md:hidden transition-all ease-in-out duration-500 relative z-10`}
						onClick={() => setShowMenu(true)}
					>
						{nav.map((item, id) => (
							<Link
								key={id}
								to={`/${item.link}`}
								className={`${
									pathMatchRoute(`/${item.link}`) && " font-semibold"
								} capitalize hover:font-medium transition-all ease-in-out duration-300`}
							>
								{item.name}
							</Link>
						))}

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
			</section>
		</section>
	);
}

export default Header;
