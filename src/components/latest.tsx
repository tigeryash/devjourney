import Image from "next/image";

const Latest = () => {
  return (
    <section className="py-32">
      <h1 className="title md:title font-medium">READ THE LATEST BLOG</h1>
      <div className="hero">
        <Image
          src="https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          width={2560}
          height={1080}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Latest;
