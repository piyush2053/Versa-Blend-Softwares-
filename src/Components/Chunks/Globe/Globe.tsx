import gifWorld from '../../../Assets/Gif/world.gif';

const GlobeComponent = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4">
      <img src={gifWorld} className='w-50 h-40 my-auto' alt='Globe_PP' />
      <div className="gap-2 md:ml-4 mt-4 md:mt-10">
        <p className="text-[45px] text-white font-thin text-opacity-90">Providing Services Around the Globe</p>
        <p className="text-lg mt-2 text-white max-w-2xl text-opacity-60">
          VersaBlend Softwares is a global leader in IT solutions, offering a diverse range of services to clients worldwide.
          From software development to cloud computing, cybersecurity, and AI-driven solutions, we empower businesses across multiple industries with cutting-edge technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default GlobeComponent;
