// @flow strict
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";
import { IoLogoGithub, IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{" Amit Kumar"}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/amit-kr-yadav/"
              className="text-[#16f2b3]"
            >

            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/amit1github"
              className="flex items-center gap-2 uppercase hover:text-[#06B6D4]"
            >
              <IoLogoGithub size={24} />
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/amit-kr-yadav/"
              className="flex items-center gap-2 uppercase hover:text-[#06B6D4]"
            >
              <BiLogoLinkedin size={24} />
              <span>LinkedIn</span>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/amit1github/web-developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#06B6D4]"
            >
              <IoStar size={20} />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/amit1github/web-developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#06B6D4]"
            >
              <CgGitFork size={20} />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
