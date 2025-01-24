import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const icons = [instagram, facebook, twitter, discord];
  const footerData = [
    {
      title: "Contact",
      links: [
        {
          title: "Phone",
          href: "#",
        },
        {
          title: "Email",
          href: "#",
        },
        {
          title: "Location",
          href: "#",
        },
      ],
    },
  ];
  return (
    <div className="grid max-md:grid-cols-1 grid-cols-[1fr_1fr_1fr] max-md:gap-10 md:place-items-center justify-between">
      <div>
        <Image src={footerLogo} alt="...footerlogo" />
        <p className="footer-desc mt-5">
          Join us on a journey towards a healthier, balanced life – where each
          inhale and exhale contributes to your overall sense of wellness.
        </p>
      </div>
      {footerData?.map((obj, index) => {
        return (
          <div key={index}>
            <h3 className="text-[#101010] font-lucida text-[32px] font-semibold leading-normal mb-5">
              {obj.title}
            </h3>
            {obj?.links?.map((link, index) => {
              return (
                <Link href={link.href} key={index} className="footer-desc">
                  {link.title}
                </Link>
              );
            })}
          </div>
        );
      })}
      <div>
        <h3 className="text-[#101010] font-lucida text-[32px] font-semibold leading-normal md:mb-20 mb-5">
          Stay on touch
        </h3>
        <div className="flex items-center justify-center gap-10">
          {icons?.map((icon, index) => {
            return (
              <Image
                src={icon}
                key={index}
                alt="...icon"
                width="30"
                height="39"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
