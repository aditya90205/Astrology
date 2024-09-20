// import logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Country Search
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Study in UK
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in USA
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in Australia
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in Canada
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in Ireland
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in Germany
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in France
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Study in Singapore
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              More
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Our Experts
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Premium Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Ask Juno
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Upcoming Events/Fairs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Videos
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Test Prep
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md overflow-hidden">
  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    Contact
  </h2>
  <ul className="text-gray-500 dark:text-gray-400 font-medium">
    <li className="mb-4 flex items-start">
      <span><FaMapMarkerAlt className="h-5 mr-4" /></span>
      <a href="#" className="hover:underline break-words">
        MeetUniversity.Com
        <br />ABL Workspaces, B-6, Block B, Sector 4, Noida, Uttar Pradesh 201301
      </a>
    </li>
    <li className="mb-4 flex items-center">
      <span><FaPhoneAlt className="h-5 mr-4" /></span>
      <a href="tel:+918047092970" className="hover:underline">
        +91 80 4709 2970
      </a>
    </li>
    <li className="mb-4 flex items-center">
      <span><FaClock className="h-5 mr-4" /></span>
      <span>Mon - Fri: 9AM - 6PM</span>
    </li>
    <li className="mb-4 flex items-center">
      <span><FaEnvelope className="h-5 mr-4" /></span>
      <a href="mailto:connect@meetuniversity.com" className="hover:underline break-words">
        connect@meetuniversity.com
      </a>
    </li>
  </ul>
</div>

        </div>
        <div className="px-4 py-6  md:flex md:items-center md:justify-between w-full">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://www.meetuniversity.com/home"><img src={"logo"} alt="" /></a> All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.5 504 249.9 504 111.8 504 0 392.2 0 256S111.8 8 249.9 8c66.5 0 124.2 24.4 169.9 64.9l-68.9 65.6C324.1 99.9 289 89 249.9 89 155.9 89 79.8 165.9 79.8 256s76.1 167 170.1 167c88.1 0 136.3-49.4 141.8-94.1h-141.8v-78.2h233.9c2.2 12.4 3.4 24.9 3.4 41.3z" />
              </svg>

              <span className="sr-only">Google</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  fillRule="evenodd"
                  d="M100.28 448H7.4V149.6h92.88zM53.83 108.1C24.09 108.1 0 83.81 0 53.83A53.74 53.74 0 0 1 53.83 0c29.74 0 53.83 24.29 53.83 53.83 0 29.97-24.1 54.27-53.83 54.27zM447.9 448h-92.7V304.6c0-34.2-.7-78.1-47.6-78.1-47.6 0-54.9 37.2-54.9 75.6V448h-92.7V149.6h89.1v40.8h1.3c12.4-23.4 42.6-48.1 87.7-48.1 93.8 0 111.1 61.8 111.1 142.1V448z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="sr-only">Linkedin account</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.799-42.278-48.61-48.691C458.061 64 288 64 288 64s-170.061 0-213.045 11.392c-23.812 6.413-42.33 25.041-48.61 48.691C16 168.066 16 256 16 256s0 87.934 10.345 131.917c6.281 23.65 24.799 42.278 48.61 48.691C117.939 448 288 448 288 448s170.061 0 213.045-11.392c23.812-6.413 42.33-25.041 48.61-48.691C560 343.934 560 256 560 256s0-87.934-10.345-131.917zM232 336V176l142 80-142 80z" />
              </svg>

              <span className="sr-only">Youtube account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
