import { open_ur_biz } from "../assets/images";
import Button from "../components/Button";

const Cta = () => {
  return (
    <section id="cta" className="max-container flex flex-col items-center justify-center sm:flex-row gap-6 max-sm:mt-6 bg-[#ffffff] ">
      <div className="flex flex-col items-center sm:items-start justify-center sm:px-24 pt-6 pb-6">
        <h2 className="text-4xl font-publicsans font-bold max-sm:text-3xl">
          Get Started
        </h2>
        <p className="lg:max-w-lg font-publicsans mt-2 text-gray-700  text-sm sm:text-lg max-sm:leading-7 mb-8">
          Become co-owner of a restaurant.
        </p>
        <Button />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={open_ur_biz}
          alt="open_ur_biz"
          width={200}
          height={200}
        />
      </div>
    </section>
  )
}

export default Cta