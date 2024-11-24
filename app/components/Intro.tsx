import Typography from "./common/Typography";

export default function Intro({ ref }: { ref: any }) {
  return (
    <div
      id="home"
      ref={ref}
      className="INTRO flex h-screen flex-col justify-center gap-3 text-[8rem] font-semibold"
    >
      <div className="flex flex-col self-center">
        <Typography className="leading-none">
          Hi, I'm <span className="text-mred text-shadow-black3">Mike</span>
        </Typography>
        <Typography className="leading-none">I'm a Web Developer.</Typography>
      </div>
      <div className="-mt-3 h-[5px] w-[90vw] bg-mred" />
    </div>
  );
}
