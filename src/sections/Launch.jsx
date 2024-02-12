import { web_main_launch, mob_card1, mob_card2 } from "../assets/images";

const Launch = () => {
  return (
    <section id="launch" 
    className="max-container max-sm:mt-6">
      <div className="flex flex-1 flex-col justify-center items-center">
        <h2 className="text-4xl font-publicsans font-bold max-sm:text-3xl">Launch 15x faster </h2>
        <p className="lg:max-w-xl mt-2 text-gray-700  text-sm sm:text-xl max-sm:leading-7">
        Starting a restaurant business on your own will take <span className="text-coral-red font-bold"> 2 years</span> to launch and 2 years to break-even. With RMINT you can launch a restaurant in <span className="text-coral-red font-bold ">6 weeks </span> and co-own the business.
        </p>
      </div>

      <div className=" sm:visible mt-16 max-lg:hidden flex flex-1 justify-center items-center">
        <img 
          src={web_main_launch}
          alt="launch"
          width={800}
          height={400}
        />
      </div>

      <div className="hidden max-lg:flex flex-col justify-center items-center mt-6">
        <img 
          src={mob_card1}
          alt="card1"
          width={300}
          height={300}
        />
        <img 
          src={mob_card2}
          alt="card1"
          width={300}
        />
      </div>
       
    </section>
  )
}

export default Launch