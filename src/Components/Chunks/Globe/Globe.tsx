import gifWorld from '../../../Assets/Gif/world.gif'

const GlobeComponent = () => {
  return (
    <div className="bg-black flex flex-row">
      <img src={gifWorld} className='w-50 h-40 my-auto'/>
      <div className="gap-2 text-left my-10 mx-2">
        <p className="text-[45px] text-white font-thin text-opacity-90">Providing Services Around the Globe</p>
        <p className="text-lg mt-2 text-white max-w-1xl text-opacity-60">
          VersaBlend Softwares is a global leader in IT solutions, offering a diverse range of services to clients worldwide.
          From software development to cloud computing, cybersecurity, and AI-driven solutions, we empower businesses across multiple industries with cutting-edge technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default GlobeComponent;
