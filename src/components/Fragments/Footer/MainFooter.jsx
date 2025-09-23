import React from "react";
import Input from "../../Elements/input";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 md:px-20 ">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
        <img className="w-50 mb-9" src="images/logo/hummatech-light.png" alt="" />       
          <h2 className="text-2xl font-semibold mb-3">Contact Us & Get Fast Quotation</h2>
          <p className="text-gray-300 mb-6">
            Have question in mind? Come tell us what you need!
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Input 
                type="text"
                placeholder="Username">
                </Input>

                <Input 
                type="email"
                placeholder="Email">
                </Input>
            </div>

                <Input 
                type="text"
                placeholder="Phone">
                </Input>
        
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full px-3 py-2 rounded bg-transparent border border-gray-400 focus:outline-none"
            ></textarea>

            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-green-900 transition">
              Submit
            </button>

          </form>         
        </div>
        
        <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-2xl">Malang Office</h3>
                <img className="w-15 h-15 " src="images/logo/marker1.png" alt="Marker" />
              </div>

           
                
                <p className="text-gray-300 font-semibold">
                Perum Permata Regency 1 Blok 10/28, Perun Gpa, Ngijo, Kec. Karang Ploso, Kabupaten Malang, Jawa Timur 65152
                </p>

            <div className="mt-6 space-y-2 text-sm font-semibold">
                <h3 className="font-bold text-2xl">More Info</h3>
                <p> <span className="font-bold">Email</span>: <br /> info@hummatech.com</p>
                <p> <span className="font-bold">Phone</span>: <br /> 085176777785</p>               
            </div>


            <div className="mt-10">
                <h3 className="font-semibold mb-2 text-2xl">Featured On :</h3>
                <p className="text-gray-300 mb-4">🌐 Hummatech.com</p>

                <h3 className="font-semibold mb-2 text-2xl">Social Media :</h3>
                <div className="flex space-x-3">
                    <img src="/partner1.png" alt="Instagram" className="h-12" />
                    <img src="/partner2.png" alt="Facebook" className="h-12" />
                    <img src="/partner2.png" alt="Tweeter" className="h-12" />
                </div>
            </div>           
          </div>          
          </div>
    </footer>
  );
};

export default Footer;
