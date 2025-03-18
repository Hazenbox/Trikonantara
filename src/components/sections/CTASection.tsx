
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-[#0d1626] rounded-xl shadow-lg shadow-[#0d1626]/10 p-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-white">
                The range of functionalities offered on the platforms includes the ability to connect
              </h2>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-gray-300 mb-8 font-fustat">
                With existing algorithmic strategies that reduce
                risk and automatically execute buy and sell orders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-[#0d1626] py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center bg-transparent text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors duration-300"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch how it works
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white opacity-5"></div>
            <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-white opacity-5"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
