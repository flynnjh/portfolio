import Head from "next/head";
import Link from "next/link";
import SocialExpanded, { SocialCollapsed } from "../components/Social";

// "../components/Social.jsx" contains the Side Bar and Social Links when on Mobile
// Favicon can be changed be modifying "../public/favicon.ico"

export default function Home() {
  return (
    <>
      <Head>
        <title>example's Website.</title>
      </Head>
      <div className="flex lg:p-24 md:p-16 p-9">
        <div className="lg:px-7">
          <SocialExpanded/> {/* Contains Profile Picture, Social Links */}
        </div>
          <div className="flex flex-col sm:px-11 text-slate-300">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl font-medium">
            👋 Hi, {"I'm"} <strong className="decoration-sky-300 underline decoration-4 underline-offset-1 font-semibold">example</strong>.
            </h1>
            <SocialCollapsed/> {/* Displays Social Links on Mobile */}
            <div>
            <p className="md:pt-9 text-xl lg:text-2xl">
              <strong>Woah, woah, woah there buddy.</strong> How's it going?
            </p>
            <p className="md:pt-9 text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="md:pt-9 text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            </div>
          </div>
      </div>
    </>
  );
}
