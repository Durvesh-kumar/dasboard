import TopNevBar from "../layouts/nevBars/TopNevBar";
import { ToastProvider } from "@/components/ui/toast";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ToastProvider />
      <TopNevBar />
      <div className="h-screen w-full scrollbar-hide overflow-auto p-5">
        {children}
      </div>
    </div>
  );
}
