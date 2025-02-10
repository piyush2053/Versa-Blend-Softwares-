import gifWorld from '../../../Assets/Gif/world.gif'

const GlobeComponent = () => {
  return (
    <div className="bg-black flex">
      <img src={gifWorld}/>
      <div className="gap-2  text-blue-50 text-left my-10">
        <p className="text-[45px] font-thin">Providing Services Around the Globe</p>
        <p className="text-lg mt-2 max-w-1xl  text-opacity-80">
          VersaBlend Softwares is a global leader in IT solutions, offering a diverse range of services to clients worldwide.
          From software development to cloud computing, cybersecurity, and AI-driven solutions, we empower businesses across multiple industries with cutting-edge technology and innovation.
        </p>
      </div>

    </div>
  );
};

export default GlobeComponent;
