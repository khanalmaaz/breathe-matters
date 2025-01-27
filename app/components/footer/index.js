import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import footerLogo from "../../assets/footer-logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";

const contactDetails = [
  { label: "Phone" },
  { label: "Email" },
  { label: "Location" },
];

const socialMedia = [
  { name: "Facebook", icon: facebook },
  { name: "Twitter", icon: twitter },
  { name: "Instagram", icon: instagram },
  { name: "Discord", icon: discord },
];

const Footer = () => {
  return (
    <div className="max-w-[1248px] mx-auto">
      <footer className={styles.footer}>
        <div className={styles["footer-left"]}>
          <Image
            className={styles["footer-logo"]}
            src={footerLogo}
            alt="Logo"
          />
          <p className={styles["footer-description"]}>
            Join us on a journey towards a healthier, balanced life – where each
            inhale and exhale contributes to your overall sense of wellness.
          </p>
        </div>

        <div className={styles["footer-right"]}>
          <div className={styles["footer-contact"]}>
            <h3 className={styles["footer-heading"]}>Contact</h3>
            {contactDetails.map((detail, index) => (
              <p key={index}>{detail.label}</p>
            ))}
          </div>

          <div className={styles["footer-social"]}>
            <h3 className={styles["footer-heading"]}>Stay in touch</h3>
            <div className={styles["footer-social-icons"]}>
              {socialMedia.map((social, index) => (
                <Image key={index} src={social.icon} alt={social.name} />
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className={styles["footer-copyright"]}>
        © 2024 BreatheMatters. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
