"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name && input.subject) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name || !input.subject) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string };

    try {
      const templateParams = {
        to_name: "", // You can change this or remove it
        from_name: input.name,
        from_email: input.email,
        subject: input.subject,
        message: input.message,
        reply_to: input.email,
      };

      const res = await emailjs.send(serviceID, templateID, templateParams, options);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({
          name: '',
          email: '',
          message: '',
          subject: '',
        });
      }
    } catch (error: any) {
      toast.error(error?.text || error.toString());
    }
  };

  return (
    <div className="">
      <p className="font-semibold mb-5 text-cyan-400 text-xl uppercase tracking-widest drop-shadow-sm">
        Contact with me
      </p>
      <div className="max-w-3xl text-slate-200 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 p-3 lg:p-5 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        <p className="text-sm text-slate-400 leading-relaxed">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-300 font-medium tracking-wide">Your Name: </label>
            <input
              className="bg-slate-950/50 w-full border rounded-md border-white/10 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] ring-0 outline-none transition-all duration-300 px-3 py-2 text-slate-200 placeholder:text-slate-500"
              type="text"
              maxLength={100}
              name='from_name'
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-300 font-medium tracking-wide">Your Email: </label>
            <input
              className="bg-slate-950/50 w-full border rounded-md border-white/10 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] ring-0 outline-none transition-all duration-300 px-3 py-2 text-slate-200 placeholder:text-slate-500"
              type="email"
              maxLength={100}
              name='from_email'
              required={true}
              value={input.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email &&
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-300 font-medium tracking-wide">Your Subject: </label>
            <input
              className="bg-slate-950/50 w-full border rounded-md border-white/10 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] ring-0 outline-none transition-all duration-300 px-3 py-2 text-slate-200 placeholder:text-slate-500"
              type="text"
              maxLength={100}
              name='subject'
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, subject: e.target.value })}
              onBlur={checkRequired}
              value={input.subject}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-300 font-medium tracking-wide">Your Message: </label>
            <textarea
              className="bg-slate-950/50 w-full border rounded-md border-white/10 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)] ring-0 outline-none transition-all duration-300 px-3 py-2 text-slate-200 placeholder:text-slate-500 resize-y"
              maxLength={500}
              name="message"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required &&
              <p className="text-sm text-red-400">
                All fields are required!
              </p>
            }
            <div className="w-full flex justify-center bg-gradient-to-r from-cyan-500 to-purple-600 p-[1px] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] md:max-w-max">
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#0A0A0A] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-100 no-underline transition-all duration-300 ease-out hover:bg-transparent"
                role="button"
                onClick={handleSendMail}
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;