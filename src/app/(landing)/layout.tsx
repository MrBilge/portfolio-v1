import Topbar from "@/components/Topbar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-dvh overflow-y-hidden">
      <Topbar />

      <main
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="flex flex-1 overflow-y-auto"
      >
        {children}
      </main>
    </div>
  );
}
