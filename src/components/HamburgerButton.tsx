export default function HamburgerButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="space-y-2 cursor-pointer z-20 lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div
        className={`w-9 h-0.5 bg-white transform transition duration-300 ${
          open ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></div>
      <div
        className={`w-9 h-0.5 bg-white transform transition duration-300 ${
          open ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></div>
    </button>
  );
}
