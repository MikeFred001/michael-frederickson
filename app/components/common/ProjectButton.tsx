import Typography from "./Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectButton({
  icon,
  text,
  href,
}: IProjectButtonProps) {
  return (
    <Link href={href} className="PROJECT-BUTTON flex-grow" target="_blank">
      <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-mred p-2 px-3 text-white transition-all duration-[250ms] hover:bg-red">
        <FontAwesomeIcon icon={icon} className="text-[1.5rem] lg:text-[2rem]" />
        <Typography className="-mb-[1px] text-[1.1rem] font-semibold leading-none text-white lg:text-[1.5rem]">
          {text}
        </Typography>
      </button>
    </Link>
  );
}

interface IProjectButtonProps {
  icon: any;
  text: string;
  href: string;
}
