import { IoCalendarOutline } from "react-icons/io5"
import Button from "../shared/Button"


function BookCall() {
  return (
    <section className='flex flex-col self-center bg-chooseFade w-[80svw] rounded-xl py-10'>
      <p className="pb-4 text-center text-white/50">
					Let&apos;s get started
				</p>
      <h1 className="text-[40px] md:text-[40px] sm:text-[30px] text-center leading-[2.7rem]">Book a discovery call</h1>
      <p className="mt-3 text-center">
				We work hard to bring in quality leads.{" "}
			</p>
      <Button className="m-auto w-fit mt-7">
						<a
							href="mailto:safiyahmasud@gmail.com"
							className="flex items-center justify-center gap-2 w-fit"
						>
							<IoCalendarOutline /> Book a Call
						</a>
					</Button>
    </section>
  )
}

export default BookCall