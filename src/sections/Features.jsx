import { web_features, mob_features } from "../assets/images";

const Features = () => {
  return (
    <section id="features"
    className="max-container justify-center flex lg:flex-row flex-col gap-10 max-sm:mt-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-publicsans font-bold max-sm:text-3xl">
        Earn Profit Share
        </h2>
        <p className="lg:max-w-lg mt-2 text-gray-700  text-sm sm:text-xl max-sm:leading-7">
        When you co-own a restaurant, you get a profit share and get the benefit of running the restaurant with <span className="text-coral-red font-bold">RMINT Co-pilot</span> which helps in menu development and marketing.
        </p>
      </div>
      <div className="max-lg:hidden">
        <img
          src={web_features}
          alt="profit_share"
          width={500}
          height={600}
        />
      </div>
      <div className="hidden max-lg:flex">
        <img
          src={mob_features}
          alt="profit_share"
          width={500}
          height={600}  
        />
      </div>
    </section>
  )
}

export default Features