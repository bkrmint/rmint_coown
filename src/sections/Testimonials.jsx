import { success_card } from "../assets/images";

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-container flex flex-col gap-10 items-center">
    <div className="flex flex-1">
      <h2 className="text-4xl font-publicsans font-bold max-sm:text-3xl">
        Success Stories
      </h2>
    </div>
    <div className="flex flex-row max-sm:flex-col gap-6 items-center">
      <img 
      src={success_card}
      alt="success_card"
      width={265}
      height={228}
      />
      <img 
      src={success_card}
      alt="success_card"
      width={265}
      height={228}
      />
      <img 
      src={success_card}
      alt="success_card"
      width={265}
      height={228}
      />
    </div>

    </section>
  )
}

export default Testimonials