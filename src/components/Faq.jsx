import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Stroke from "/stroke.svg";

function Faq() {
	const [isOpen, setIsOpen] = useState(0);

	const faqs = [
		{
			question: "Can my website help me rank higher on Google?",
			answer:
				"Yes! We optimize your website with HVAC-specific keywords, mobile responsiveness, local SEO strategies and so on, to help you rank higher on search engines. This ensures that when people search for services like 'HVAC repair near me,' your business appears at the top of the results.",
		},
		{
			question: "Can You Help Me Update My Existing Website?",
			answer:
				"Yes! Whether you need minor updates or a complete redesign, we can help. We’ll evaluate your current website and suggest improvements to align with modern design standards, SEO best practices, and user-friendly functionality.",
		},
		{
			question: "Do You Offer Website Hosting Services?",
			answer:
				"Absolutely. We provide reliable website hosting that ensures fast loading times, security, and minimal downtime. Plus, our hosting plans come with options for regular updates and backups.",
		},
		{
			question: "Can You Integrate Scheduling Tools and AI Features?",
			answer:
				"Yes! We can integrate popular HVAC scheduling software like ServiceTitan, Jobber, or Housecall Pro. Additionally, we can implement AI tools such as chatbots and missed call text-back services to enhance customer interaction and streamline your business operations.",
		},
		{
			question: "How Do You Ensure My Website Is Optimized for Search Engines?",
			answer:
				"Our SEO process includes,Researching and integrating HVAC-specific keywords.Optimizing website speed and performance.Creating mobile-friendly designs.Implementing local SEO strategies to help your business rank for searches like 'HVAC repair near me.'Adding metadata, alt tags, and structured data for better search engine visibility.",
		},
		{
			question: "How Do I Get Started with Webly?",
			answer:
				"Getting started is easy:Contact us using the Get Started button or our contact form.Schedule a free consultation to discuss your business needs.Receive a tailored proposal and timeline for your project.Let us take care of everything while you focus on running your HVAC business!",
		},
	];

	const toggleFAQ = (index) => {
		setIsOpen(isOpen === index ? isOpen : index);
	};

	return (
		<section id="faq">
			<div className="flex flex-col gap-7">
				<h2 className="leading-tight text-[50px] md:text-[40px] sm:text-[30px] text-center mb-10 sm:mb-5">
					<span className="">Frequently asked </span>
					<span className="">
						<span className="inline-block text-textFade">
							questions
							<img
								src={Stroke}
								alt="emphasis stroke"
								className="w-[240px] md:w-[210px] sm:w-[140px]"
							/>
						</span>
					</span>
				</h2>
			</div>
			{faqs.map((faqq, index) => (
				<div
					key={index}
					className="flex flex-col w-[80svw] m-auto items-center"
				>
					<div
						onClick={() => toggleFAQ(index)}
						className="flex flex-col justify-between w-full px-10 py-5 mt-5 md:gap-5 sm:gap-5 sm:px-3 rounded-xl bg-chooseFade"
					>
						<div className="flex justify-between cursor-pointer">
							<h3>{faqq.question}</h3>
							<span>
								{isOpen === index ? <IoChevronDown /> : <IoChevronUp />}
							</span>
						</div>
						{isOpen === index && (
							<div className="py-10 text-base font-light sm:py-0 sm:text-sm">
								{faqq.answer}
							</div>
						)}
					</div>
				</div>
			))}
		</section>
	);
}

export default Faq;
