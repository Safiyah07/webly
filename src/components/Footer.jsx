import Logo from "/webly-logo.png";
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoMailOutline,
} from "react-icons/io5";

function Footer() {
	return (
		<section className="pt-20 sm:pt-10">
			<div className="flex flex-col items-center justify-center">
				<a href="#top">
					<img
						src={Logo}
						alt="webly-logo"
						className="w-60 sm:w-48"
					/>
				</a>

				<div className="flex gap-7">
					<a href="mailto:safiyahmasud@gmail.com">
						<IoMailOutline size={20} />
					</a>

					<a href="https://web.facebook.com/profile.php?id=100076073626505">
						<IoLogoFacebook size={20} />
					</a>

					<a href="https://www.instagram.com/safiyahwebcraft">
						<IoLogoInstagram size={20} />
					</a>

					<a href="https://www.linkedin.com/in/safiyah-amedu-9424b6230/">
						<IoLogoLinkedin size={20} />
					</a>
				</div>

				<div className="flex sm:flex-col sm:items-center sm:gap-5 justify-between w-[50%] my-10">
					<a href="#choose">About</a>
					<a href="#projects">Projects</a>
					<a href="#faq">FAQ</a>
					<a href="#book">Contact Us</a>
				</div>

				<div className="w-full py-2 text-center bg-blueNavBg/10">
					Made by Webly Team with love 💙
				</div>
			</div>
		</section>
	);
}

export default Footer;
