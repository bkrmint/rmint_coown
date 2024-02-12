import Button from '../components/Button';
import { hero_upscale } from '../assets/images';

const Hero = () => {
  return (
    <section id="home"
    className="w-full flex flex-col-reverse lg:flex-row  justify-center min-h-screen max-container">
      {/* <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"> */}
      <div className="relative flex flex-col justify-center items-start w-full lg:w-1/2 max-xl:padding-x pt-6 max-sm:pb-16">
        <h1 className='mt-6 font-publicsans xl:text-8xl lg:text-6xl md:text-6xl max-sm:text-[46px] max-sm:leading-none font-bold'>
          Co-own <br /> Restaurants
        </h1>
        <p className="font-publicsans text-gray-700 text-sm sm:text-xl leading-8 mt-6 mb-8 sm:max-w-sm font-bold">
          Turn your dream restaurant into reality. 
        </p>
        <Button />

      </div>

      <div className="relative flex flex-1 justify-center items-center max-lg:py-40 max-sm:max-h-dvh max-sm:pt-28 max-sm:pb-0 object-contain">
        <img
          src={hero_upscale}
          alt="hero"
          width={500}
          height={600}
        />
      </div>
    </section>
  )
}

export default Hero