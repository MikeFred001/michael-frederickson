import Link from "next/link";
import Typography from "./common/Typography";
import { useState, useEffect } from "react";

export default function FooterContacts({
  hideFooter,
}: {
  hideFooter: boolean;
}) {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const contactStyle =
    "text-center cursor-pointer text-2xl font-semibold transition-all duration-200 text-mred hover:text-black hover:text-shadow-red1 flex-1";

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
    <div
      className={`FOOTER-CONTACTS fixed bottom-0 flex w-full justify-between px-28 py-6 transition-all duration-300 ${hideFooter ? "pointer-events-none opacity-0" : ""}`}
    >
      <Typography className={contactStyle} onClick={copyPhoneNum}>
        {phoneCopied ? "COPIED!" : contactInfo.phone}
      </Typography>

      <Link href={`mailto:${contactInfo.email}`} passHref className="flex-1">
        <Typography className={contactStyle}>{contactInfo.email}</Typography>
      </Link>

      <Link
        target="_blank"
        href={contactInfo.linkedIn}
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Typography className={contactStyle}>LinkedIn</Typography>
      </Link>

      <Link
        target="_blank"
        href={contactInfo.github}
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Typography className={contactStyle}>GitHub</Typography>
      </Link>
    </div>
  );

  function copyPhoneNum() {
    navigator.clipboard.writeText(contactInfo.phone);
    setPhoneCopied(true);
  }
}
