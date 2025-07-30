import CSRPage from "../../src/app/pages/CSR";
import SSGPage from "../../src/app/pages/SSG";
import SSRPage from "../../src/app/pages/SSR";
import Image from "next/image";

export default function Home() {
  return (
    <div suppressHydrationWarning className=" font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4  gap-4 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}Z
          priority
        /> */}
        <h2 id="maina_tag"> NExt JS </h2>
        <div className="flex bg-gray-400">
        <CSRPage/>
        <SSGPage/>
        <SSRPage/>
        </div>
      </main> 
    </div>
  );
}
