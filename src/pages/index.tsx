import { HeartIcon } from "@/components/heartIcon";
import Head from "next/head";
import MainBody from "@/components/mainBody";

const date = new Date();

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <header className="border-b-[1px] border-gray-200 bg-white px-[5%] pt-2 pb-2 ">
          <a href="" className=" text-gray-800 text-3xl font-extrabold">
            FAISS
          </a>
        </header>
        <Head>
          <title>FAISS - Question and Answer Program</title>
        </Head>
        {/* <MainBody /> */}
        <MainBody />
        <footer className=" text-center text-gray-800 flex justify-center">
          &copy; {date.getFullYear()}. Developed with&nbsp;
          <HeartIcon />
          &nbsp;by&nbsp;
          <b>Augustine &amp; Hillary.</b>
        </footer>
      </div>
      <div className="flex lg:hidden h-screen text-gray-700 items-center justify-center text-center w-[90%] mx-auto">
        Ooooooops! Mobile screen implementation was not considered while
        developing this program.
      </div>
    </>
  );
}
