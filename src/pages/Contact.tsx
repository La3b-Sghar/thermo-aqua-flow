
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Our team is ready to help you find the perfect solution for your facility
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Email Us</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button 
                className="w-full"
                onClick={() => window.location.href = 'mailto:info@thermoaquaflow.com'}
              >
                <Mail className="mr-2" />
                Email Now
              </Button>
            </div>

            {/* Phone Contact */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Call Us</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Speak directly with our team during business hours.
              </p>
              <Button 
                className="w-full"
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                <Phone className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What to Expect
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Free initial consultation</li>
              <li>• Detailed analysis of your facility's needs</li>
              <li>• Custom solution proposal</li>
              <li>• ROI calculation and benefits breakdown</li>
              <li>• Implementation timeline and process overview</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
