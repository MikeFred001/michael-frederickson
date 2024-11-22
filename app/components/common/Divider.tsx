export default function Divider({ reversed = false }: { reversed?: boolean }) {
  return (
    <div
      className={`relative h-[100px] w-full ${reversed ? "bg-gray-200" : "bg-gray-100"}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full border-r-[100vw] border-t-[100px] border-t-transparent ${reversed ? "border-r-gray-100" : "border-r-gray-200"} `}
      />
    </div>
  );
}
