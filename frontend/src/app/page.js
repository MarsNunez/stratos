import ForYou from "./components/ForYou";
import More from "./components/More";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 h-screen max-w-7xl mx-auto">
      {/* LEFT COMPONENT */}
      <Sidebar />

      {/* MIDDLE COMPONENT */}
      <ForYou />

      {/* RIGHT COMPONENT */}
      <More />
    </main>
  );
}
