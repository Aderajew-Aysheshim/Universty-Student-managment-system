import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      name: 'Telegram',
      href: 'https://t.me/ETETH64',
      iconPath: 'M23.953 4.57a10 10 0 01-2.825.775 ...' // replace with full path if needed
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aderajew-aysheshim',
      iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Aderajew-Aysheshim',
      iconPath: 'M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387 ...' // replace with full path
    },
    {
      name: 'Portfolio',
      href: 'https://aderajew-aysheshim.vercel.app',
      iconPath: 'M23.954 4.569c-.885.392-1.83.656-2.825.775 ...' // replace with full path
    }
  ];

  return (
    <footer className="py-10 mt-10 text-white bg-blue-700">
      <div className="container px-4 py-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="mb-2 font-bold text-md">UniversitySys</h3>
            <p className="text-xs opacity-90">
              Empowering education through innovation.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/register-student" className="hover:text-gray-300">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold">Contact Us</h4>
            <ul className="space-y-1 text-xs opacity-90">
              <li><a href="mailto:support@universitysys.edu" className="hover:text-gray-300">support@universitysys.edu</a></li>
              <li><a href="tel:0960737167" className="hover:text-gray-300">0960737167</a></li>
              <li>Ethiopia</li>
              <li>Academic City, AA 1000</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold">Connect</h4>
            <div className="flex space-x-2">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-3 mt-3 text-xs text-center border-t border-blue-600">
          <p>© {currentYear} UniversityMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
