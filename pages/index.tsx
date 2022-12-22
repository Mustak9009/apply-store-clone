import Head from "next/head";
import Header from "../Components/Header";
import Landing from "../Components/Landing";
import { Tab } from "@headlessui/react";
import {Fragment} from 'react';
import type{GetServerSideProps} from 'next/types';
interface Props{
  name:string
}
export default function Home(props:Props) {
  console.log(props.name);
  return (
    <div>
      <Head>
        <title>Apple store clone</title>
        <meta name="description" content="Apple store clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen  bg-[#1b1b1b]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl text-white tracking-wide font-medium md:text-5xl">
            New promos
          </h1>
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                <button className={'bg-red-400 text-white  p-2 rounded mx-5 cursor-pointer'}>Tab 1</button>
              </Tab>
              <Tab className={'bg-red-400 text-white  p-2 rounded mx-5 cursor-pointer'}>
                Tab 2
              </Tab>
              <Tab className={'bg-red-400 text-white  p-2 rounded mx-5 cursor-pointer'}>
                Tab 3
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className={'text-white'}>Content 1</Tab.Panel>
              <Tab.Panel className={'text-white'}>Content 2</Tab.Panel>
              <Tab.Panel className={'text-white'}>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps:GetServerSideProps = async()=>{
  return{
    props:{
      name:'Soniya'
    }
  }
}