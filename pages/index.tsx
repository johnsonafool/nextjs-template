import Head from "next/head";
import styles from "../styles/Home.module.css";
import nextPackage from "package.json";

export default function Home({}) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">hello world!</h1>
      <h1>hello world!</h1>
      <h3 className="">my name is john doe</h3>
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        ...
      </button>
    </>
  );
}
