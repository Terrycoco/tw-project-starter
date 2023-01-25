import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { ActionModal } from "../components/modals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("got here");
    setShowModal(true);
  };

  const myAction = () => {
    console.log("run!");
  };

  return (
    <>
      <Head>
        <title>Project Starter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ActionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Action Modal Here"
        action={myAction}
        actionBtnText="Run Action"
      >
        Just click to run this
      </ActionModal>
      <div className=" flex space-x-2 justify-center">
        <Link
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          href="/stylesheet"
        >
          To Stylesheet
        </Link>
        <button
          type="button"
          className="px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
          onClick={openModal}
        >
          Launch demo modal
        </button>
      </div>
    </>
  );
}
