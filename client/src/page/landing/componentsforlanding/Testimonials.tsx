import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Project Manager, TechCorp",
    image: "/placeholder.svg",
    quote: "Project Hub has transformed the way our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.",
  },
  {
    name: "Michael Chen",
    position: "CEO, Startup Innovations",
    image: "/placeholder.svg",
    quote: "As a growing startup, we needed a scalable solution that wouldn't break the bank. Project Hub delivered beyond our expectations with its flexible pricing and comprehensive toolset.",
  },
  {
    name: "Emily Rodriguez",
    position: "Team Lead, Creative Solutions",
    image: "/placeholder.svg",
    quote: "The ability to customize workflows and automate routine tasks has been a game-changer. Our team can now focus on what truly matters - delivering great work.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of teams worldwide to streamline their project management workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-gray-400 mb-3"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-28 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-400 w-full h-5 rounded"></div>
            </div>
            <div className="w-28 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-400 w-full h-5 rounded"></div>
            </div>
            <div className="w-28 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-400 w-full h-5 rounded"></div>
            </div>
            <div className="w-28 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-400 w-full h-5 rounded"></div>
            </div>
            <div className="w-28 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-400 w-full h-5 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;