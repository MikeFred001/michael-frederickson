import Typography from "./common/Typography";

export default function Intro() {
  return (
    <div className="INTRO flex flex-col self-center">
      <Typography className="leading-none">
        Hi, I'm <span className="text-mred text-shadow-black3">Mike</span>
      </Typography>
      <Typography className="leading-none">I'm a Web Developer.</Typography>
    </div>
  );
}
