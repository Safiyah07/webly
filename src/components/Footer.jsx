import Logo from "/webly-logo.png";
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoMailOutline,
} from "react-icons/io5";

function Footer() {
	return (
		<section className="pt-20">
			<div className="flex flex-col items-center justify-center">
				<a href="">
					<img
						src={Logo}
						alt=""
						className="w-60"
					/>
				</a>

				<div className="flex gap-7">
					<a href="">
						<IoMailOutline size={20} />
					</a>

					<a href="">
						<IoLogoFacebook size={20} />
					</a>

					<a href="">
						<IoLogoInstagram size={20} />
					</a>

					<a href="">
						<IoLogoLinkedin size={20} />
					</a>
				</div>

				<div className="flex sm:flex-col sm:items-center sm:gap-5 justify-between w-[50%] my-10">
					<a href="">About</a>
					<a href="">Services</a>
					<a href="">FAQ</a>
					<a href="">Contact Us</a>
				</div>

				<div className="w-full py-2 text-center bg-blueNavBg/10">
					Made by Webly Team with love💙
				</div>
			</div>
		</section>
	);
}

export default Footer;
