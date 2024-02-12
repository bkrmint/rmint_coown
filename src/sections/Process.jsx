import { mob_meeting, web_meeting, mob_interview } from "../assets/images";

const Process = () => {
  return (
    <section id="process"
    className="max-container flex flex-col  items-center max-sm:mt-6">
      <div className="flex">
        <h2 className="text-4xl font-publicsans font-bold max-sm:text-3xl">
          Process to work togather
        </h2>
      </div>
      <div className="relative flex flex-row max-lg:hidden ">
        <img src={mob_interview} 
        alt="meeting"
        width={300}
        height={300}
        />
        <img src={web_meeting} 
        alt="meeting"
        width={500}
        height={500} />
      </div>
      <div className="hidden max-lg:flex flex-col gap-5 mb-10 items-center">
        <img src={mob_meeting} 
        alt="meeting"
        width={500}
        height={500} />
        <img src={mob_interview} 
        alt="interview"
        width={250}
        height={250} />
      </div>
    </section>
  )
}

export default Process