import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </header>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>
      </div>
    </div>
  );
}
