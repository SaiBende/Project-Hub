
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 pt-32 pb-20 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Manage Projects <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500">Effortlessly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Streamline your workflow, boost team productivity, and deliver projects on time with our all-in-one project management solution.
            </p>
            <div>
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white text-base px-8 py-6">
                Get Started Free
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gray-500/10 rounded-xl"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <img
                  src="./images/Home.png"
                  alt="TaskFlow Dashboard Preview"
                  className="w-full rounded-lg shadow-inner"
                />
                <div className="absolute -bottom-3 -right-3 bg-white rounded-lg p-2 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <p className="text-xs font-medium">Project on track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
