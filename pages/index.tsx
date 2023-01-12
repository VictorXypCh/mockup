import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from '../styles/Home.module.css'
import productlist from "../components/mockup/productlist";
import BlogSections from "../components/mockup/BlogSections";
import Filter from "../components/mockup/Filter";
import Stat from "../components/Mockup/Stat";
import Search from "../components/Mockup/Search";
import Pagination from "../components/Mockup/Pagination";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Search />
      <Filter />
      <BlogSections />
      <Pagination />
    </>
  );
}
