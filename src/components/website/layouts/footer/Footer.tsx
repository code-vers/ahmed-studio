import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  "Home",
  "How To Order",
  "Consultant",
  "Cloud Storage",
  "Differences",
  "About Us",
];

const resources = [
  "AI Tools",
  "Our LAB",
  "Subscription",
  "Privacy Policy",
  "Terms of Service",
];

const socialIcons = [
  { name: "facebook", icon: FaFacebookF, href: "#" },
  { name: "linkedin", icon: FaLinkedinIn, href: "#" },
  { name: "instagram", icon: FaInstagram, href: "#" },
  { name: "x", icon: FaXTwitter, href: "#" },
  { name: "whatsapp", icon: FaWhatsapp, href: "#" },
];

const paymentIcons = [
  { name: "apple-pay", src: "/images/footer/a.png" },
  { name: "visa", src: "/images/footer/b.png" },
  { name: "mastercard-text", src: "/images/footer/c.png" },
  { name: "stc", src: "/images/footer/d.png" },
  { name: "bank", src: "/images/footer/e.png" },
  { name: "paypal", src: "/images/footer/f.png" },
  { name: "tabby", src: "/images/footer/g.png" },
  { name: "tamara", src: "/images/footer/h.png" },
  { name: "mada", src: "/images/footer/i.png" },
  { name: "mastercard", src: "/images/footer/j.png" },
];

export default function Footer() {
  return (
    <footer className='w-full bg-[#2F2F2F] text-white'>
      <div className='mx-auto max-w-[80%] px-4 sm:px-6 lg:px-[54px] pt-[46px] md:pt-[50px] pb-[24px]'>
        <div className='grid grid-cols-1 gap-y-10 md:grid-cols-[260px_1fr_1fr_1.45fr] md:gap-x-[34px] lg:gap-x-[48px]'>
          {/* Left Logo Column */}
          <div className='flex flex-col items-center'>
            <div className='w-[168px] h-[143px] md:w-[230px] md:h-[120px] mb-10'>
              <Image
                src='/images/logo-white.png'
                alt='Ahmed Studio'
                width={268}
                height={143}
                className='object-contain'
                priority
              />
            </div>

            <button className='mt-[18px] h-[29px] min-w-[121px] rounded-[4px] bg-white px-[18px] text-[11px] font-medium text-[#2F2F2F] transition-opacity duration-200 hover:opacity-90'>
              Request A Quote
            </button>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h3 className='mb-[14px] text-[14px] font-semibold leading-none text-white'>
              Quick Links
            </h3>

            <ul className='space-y-[10px]'>
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-[12px] font-normal leading-[1.25] text-white/95 transition-opacity duration-200 hover:opacity-80'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className='text-center md:text-left'>
            <h3 className='mb-[14px] text-[14px] font-semibold leading-none text-white'>
              Resources
            </h3>

            <ul className='space-y-[10px]'>
              {resources.map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-[12px] font-normal leading-[1.25] text-white/95 transition-opacity duration-200 hover:opacity-80'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='text-center md:text-left'>
            <h3 className='mb-[14px] text-[14px] font-semibold leading-none text-white'>
              Contact & Support
            </h3>

            <div className='mb-[14px] flex items-center justify-center gap-[12px] md:justify-start'>
              {socialIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='flex h-[22px] w-[22px] items-center justify-center rounded-[2px] bg-white text-[#2F2F2F] hover:opacity-85'
                    aria-label={item.name}>
                    <Icon size={12} />
                  </Link>
                );
              })}
            </div>

            <div className='space-y-[10px] text-[12px] leading-[1.28] text-white/95'>
              <p>
                <span className='font-semibold'>Phone Number:</span> +966 50 023
                8627
              </p>
              <p>
                <span className='font-semibold'>Email:</span>{" "}
                old-to-new@hotmail.com
              </p>
              <p className='max-w-[265px] mx-auto md:mx-0 leading-[1.2]'>
                Inquiries: Support for individuals and organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Icons */}
        <div className='mt-[34px] flex flex-wrap items-center justify-center gap-[8px] md:gap-[10px]'>
          {paymentIcons.map((item) => (
            <div
              key={item.name}
              className='relative flex items-center justify-center rounded-[3px] px-[6px]'>
              <Image
                src={item.src}
                alt={item.name}
                width={100}
                height={25}
                className='h-auto w-auto object-contain'
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='mt-[14px] border-t border-white/20' />

        {/* Copyright */}
        <p className='pt-[12px] text-center text-[12px] leading-none text-white/75'>
          Copyright: © 2024 Ahmed Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
