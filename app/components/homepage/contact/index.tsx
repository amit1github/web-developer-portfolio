// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-slate-200">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-slate-900/60 backdrop-blur-md border border-white/10 w-fit text-slate-200 rotate-90 p-2 px-5 text-xl rounded-md shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></span>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2">
           <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;