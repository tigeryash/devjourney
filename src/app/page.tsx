import About from "@/components/about";
import Latest from "@/components/latest";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex   flex-col items-center justify-between p-4 md:p-8 xl:p-10">
      <Latest />
      <About />
      <Projects />
    </main>
  );
}
