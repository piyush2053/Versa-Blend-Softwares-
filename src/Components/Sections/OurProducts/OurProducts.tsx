import React from "react";
import image from '../../../Assets/Images/vbsref.png'
import TrueFocus from "../../Chunks/FocusText/FocusText";
interface Product {
  name: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    name: "Minute Minder",
    description: "A school management system for admin tasks, teacher payroll, attendance tracking, and more.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg",
    link: "https://example.com/menu-system",
  },
  {
    name: "Refrence Buddy",
    description: "VS Code extension tool for finding references, definitions, and documentation for code.",
    image: image,
    link: "https://marketplace.visualstudio.com/items?itemName=VersaBlendSoftwares.referencebuddy&ssr=false#review-details",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 max-w-screen-xl mx-auto py-10 px-5 lg:px-10 gap-5">
      <h1 className="md:col-span-2 text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10">
      <TrueFocus
        sentence="Our Products"
        manualMode={false}
        blurAmount={2}
        borderColor="blue"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
      </h1>
     
      {products.map((product, index) => (
        <a
          key={index}
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
        >
          <div
            className="w-full h-64 bg-cover bg-center flex items-end p-5"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="bg-black bg-opacity-60 text-white p-4 rounded-lg transition-opacity opacity-100 group-hover:opacity-0">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm mt-2">{product.description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">View More</span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default OurProducts;
