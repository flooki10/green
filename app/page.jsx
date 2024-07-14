import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Walid Sabhi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80"> Experienced Full Stack Web Developer with 
            a passion for creating unique, stylish, and professional websites. Committed to perfection 
            in every project, I bring over 5 years of expertise to deliver exceptional online experiences. 
            Currently pursuing a degree in Healthcare Engineering in Spain, merging technical skills with 
            domain knowledge. Let&apos;s collaborate to bring your vision to life and achieve your online goals. 
            Get in touch and let&apos;s create something amazing together!
            </p>
            {/* btn and socials */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
        >
          <span> Download CV </span>
          <FiDownload className="text-xl" />
        </Button>
        <div className="mb-8 xl:mb-0">
          <Social containerStyles="flex gap-6" 
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
        </div>
      </div>
    

          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/> 
    </section>
  );
};

export default Home;