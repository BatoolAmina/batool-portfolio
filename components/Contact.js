"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, CheckCircle, XCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Initiating Transfer..." });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message Sent Successfully!" });
          form.current.reset();
        },
        (error) => {
          setStatus({ type: "error", message: "Transmission Failed. Try Again." });
        }
      );

    // Auto-clear status message after 5 seconds
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return (
    <AnimatedSection>
      <div id="contact" className="container mx-auto px-6 py-8 relative overflow-hidden font-sans">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-xl h-64 bg-[#f1f8f1] rounded-full blur-[100px] opacity-30" />

        <div className="flex flex-col items-center mb-8 text-center">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "40px" }} 
            className="h-[2px] bg-[#81c784] mb-3" 
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            Get In Touch
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto bg-white rounded-[2rem] p-6 md:p-10 border border-[#f0f7f0] shadow-sm hover:shadow-lg transition-all duration-500"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <User className="absolute top-1/2 left-5 -translate-y-1/2 text-[#a5d6a7]" size={16} />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="pl-12 pr-5 py-3.5 w-full bg-[#fbfdfb] border border-[#f0f7f0] rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e8f5e9] transition-all text-sm font-medium"
                />
              </div>

              <div className="relative flex-1">
                <Mail className="absolute top-1/2 left-5 -translate-y-1/2 text-[#a5d6a7]" size={16} />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Email Address"
                  className="pl-12 pr-5 py-3.5 w-full bg-[#fbfdfb] border border-[#f0f7f0] rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e8f5e9] transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                placeholder="How can I help you today?"
                className="resize-none p-5 w-full bg-[#fbfdfb] border border-[#f0f7f0] rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e8f5e9] transition-all text-sm font-medium"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status.type === "sending"}
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-md hover:bg-[#1b5e20] disabled:opacity-50 transition-all text-xs uppercase tracking-widest"
              whileHover={{ scale: status.type === "sending" ? 1 : 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {status.type === "sending" ? (
                <>
                  <Loader className="animate-spin" size={16} />
                  Transmitting...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>

            <div className="text-center min-h-[1.2rem]">
              <AnimatePresence>
                {status.message && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest ${
                      status.type === "success" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {status.type === "success" ? <CheckCircle size={12} /> : <XCircle size={12} />}
                    {status.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;