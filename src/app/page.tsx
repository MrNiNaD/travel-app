import { imgConfig } from "@/constant/imgConfig";

export default function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${imgConfig?.Hero?.src})`,
          backgroundSize: "100% 100%",
        }}
        className="h-[500px] bg-cover"
      ></section>
    </>
  );
}
