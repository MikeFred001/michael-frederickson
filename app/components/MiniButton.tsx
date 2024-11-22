import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "./common/Typography";
import { useState } from "react";
import Link from "next/link";

export default function MiniButton({
  icon,
  label,
  download = false,
}: MiniButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/assets/resume.pdf"
      target={"_blank"}
      download={download ? "" : undefined}
      className="MINI-BUTTON z-10 flex h-full flex-col items-center justify-center text-[2.5rem] text-red transition-all duration-200 hover:-translate-y-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FontAwesomeIcon
        icon={icon}
        className="rounded-full bg-white p-4 text-red"
      />
      <Typography
        className={`absolute bottom-4 left-[18px] w-11 text-center text-[.9rem] font-semibold leading-none text-white opacity-0 transition-all duration-200 ${hover ? "translate-y-[10px] opacity-100" : ""}`}
      >
        {label}
      </Typography>
    </Link>
  );
}

interface MiniButtonProps {
  icon: any;
  label: string;
  download?: boolean;
}
