import { ConfettiProvider } from "@/components/providers/ConfettiProvider";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";
import { ToastProvider } from "@/components/providers/ToastProvider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        <ConfettiProvider />
        <ToastProvider />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
