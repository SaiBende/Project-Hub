

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Project Hub? Our team is here to help you find the right solution for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                  <Input id="firstName" placeholder="John" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                  <Input id="lastName" placeholder="Doe" className="border-gray-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <Textarea id="message" placeholder="Tell us how we can help..." className="border-gray-300 min-h-[120px]" />
              </div>
              <Button className="w-full bg-gray-800 hover:bg-gray-700">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Our team is eager to hear from you. Whether you're curious about features, pricing, or need a demo, we're ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Us</p>
                    <p className="text-gray-600">support@Project Hub.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9AM - 5PM EST</p>
              <p className="text-gray-600">Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
