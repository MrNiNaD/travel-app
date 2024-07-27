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
      >
        <div className="wrapper">
          <h2 className="text-[40px] font-bold text-center pt-[50px]">
            Lets Travel Together
          </h2>
        </div>
      </section>
    </>
  );
}
