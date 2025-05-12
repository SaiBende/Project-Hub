
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform how your team works?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Join thousands of teams that deliver projects on time, every time with Project Hub.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-base px-8 py-6">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
