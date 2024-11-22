import Typography from "./common/Typography";
import ContactButton from "./ContactButton";
import PhoneButton from "./PhoneButton";
import ResumeButton from "./ResumeButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Contact() {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const contactInfo = {
    email: "mpfplus@gmail.com",
    phone: "702-375-5865",
    linkedIn: "https://www.linkedin.com/in/mfrederickson-software-engineer",
    github: "https://github.com/MikeFred001",
  };

  useEffect(() => {
    if (phoneCopied) {
      const timeout = setTimeout(() => {
        setPhoneCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [phoneCopied]);

  return (
    <div className="CONTACT w-[74rem] pb-20">
      <Typography className="mb-4 text-[6rem] font-semibold text-shadow-red2">
        Contact Me
      </Typography>
      <div className="flex flex-grow justify-between">
        <PhoneButton
          icon={faMobileAlt}
          label="phone"
          onClick={copyPhoneNum}
          phoneCopied={phoneCopied}
        />
        <ContactButton
          icon={faEnvelope}
          label="email"
          href={`mailto:${contactInfo.email}`}
        />
        <ContactButton
          icon={faLinkedin}
          label="linkedin"
          href={contactInfo.linkedIn}
        />
        <ContactButton
          icon={faGithub}
          label="github"
          href={contactInfo.github}
        />
        <ResumeButton />
      </div>
    </div>
  );

  function copyPhoneNum(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (phoneCopied) return;
    navigator.clipboard.writeText("702-375-5865");
    setPhoneCopied(true);
  }
}
