import gifWorld from '../../../Assets/Gif/world.gif';
import BlurText from '../BlurText/BlurText';

const GlobeComponent = () => {
  return (
    <div className="bg-[#0D0D0D] flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4">
      <img src={gifWorld} className='w-50 h-40 my-auto' alt='Globe_PP' />
      <div className="gap-1 md:ml-4 mt-4 md:mt-4 my-auto">
        <BlurText
          text="Providing Services Around the Globe"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => console.log('')}
          className="text-[45px]  text-white font-thin text-opacity-90" animationFrom={null} animationTo={null} />
        <BlurText
          text="VersaBlend Softwares is a global leader in IT solutions, offering a diverse range of services to clients worldwide.
          From software development to cloud computing, cybersecurity, and AI-driven solutions, we empower businesses across multiple industries with cutting-edge technology and innovation."
          delay={40}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => console.log('')}
          className="text-lg mt-2 text-white max-w-2xl text-opacity-60" animationFrom={null} animationTo={null} />
      
      </div>
    </div>
  );
};

export default GlobeComponent;
