import { IoCalendarOutline } from "react-icons/io5";
import Safiyah from "/safiyah.jpg";
import Button from "../shared/Button";

function BookCall() {
	return (
		<section
			id="book"
			className="flex flex-col self-center bg-chooseFade w-[80svw] sm:w-[88svw] rounded-xl py-10 relative sm:px-5"
		>
			{/* <img src={Safiyah} alt="ceo image" className="absolute object-cover w-32 h-32 rounded-full -top-10 -right-5" /> */}
			<p className="pb-4 text-sm text-center sm:text-xs text-white/50">
				Let&apos;s get started
			</p>
			<h2 className="text-[40px] md:text-[40px] sm:text-[25px] text-center leading-[2.7rem]">
				Book a discovery call
			</h2>
			<p className="mt-3 text-center">
				Just a 15-minute no-pressure call to see if we are a good fit!
			</p>
			<Button className="m-auto w-fit mt-7">
				<a
					href="https://calendly.com/safiyahmasud/website-intro-call-with-safiyah"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 w-fit"
				>
					<IoCalendarOutline /> Book a Call
				</a>
			</Button>

			<div className="w-4/5 m-auto my-8 border-t border-gray-200 sm:w-full"></div>
			<div className="flex flex-col items-center">
				<img
					src={Safiyah}
					alt="CEO Image"
					className="object-cover mb-4 rounded-full shadow-md h-28 w-28"
				/>
				<p className="font-semibold">With Safiyah</p>
				<p className="text-sm sm:text-xs text-white/50">Owner, Webly</p>
			</div>
		</section>
	);
}

export default BookCall;
