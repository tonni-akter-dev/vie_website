'use client'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#d3d5bf] text-gray-800 px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* VIE Services */}
        <div>
          <h3 className="font-bold mb-3">VIE SERVICES</h3>
          <p className="text-sm leading-relaxed">
            We understand that each student’s situation and needs are unique to them.
            Tell us more about what you’re looking for, and we will get back to you
            soon with some ideas.
          </p>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-bold mb-3">COMMUNITY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Made with care</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="font-bold mb-3">ASSISTANCE</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Certification</a></li>
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h3 className="font-bold mb-3">OFFICES</h3>
          <p className="text-sm">📍 Suite 1B & 1C/40 Raymond Street Bankstown NSW 2200</p>
          <p className="text-sm mt-2">✉️ contact@vieservices.com.au</p>
        </div>
      </div>

      {/* Acknowledgement */}
      <div className="mt-10 text-sm leading-relaxed">
        VIE Services acknowledges the traditional owners of country throughout Australia
        and recognize the continuing connections to lands, waters and communities. We pay our
        respect to Aboriginal and Torres Strait Islander communities and to elders past,
        present and emerging.
      </div>

      {/* Bottom row */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025, VIE Services. All rights reserved. <strong>ABN- 29653426987</strong></p>
        
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
