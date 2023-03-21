import axios from 'axios';
import Head from 'next/head'
import { useState } from 'react'
import Modal from '../../components/modal'


export default function Home() {

  const [show , setShow ] = useState(false);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script  src="https://blockonomics.co/js/pay_widget.js"></script>
      </Head>

      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
    <div className="inset-0 h-screen bg-cover bg-center 
        bg-[url('https://wallpapercave.com/wp/wp6689710.jpg')]"
    >
    </div>
    <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
    <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center bg-[url('https://wallpapercave.com/wp/wp6689710.jpg')]">

            <div className="grid grid-cols-12 gap-1">
                <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                        <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                          Headline of the TIme 
                        </p>
                    </div>
                    <div className="text-gray-400 font-semibold text-xl mb-4"></div>
                    <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                        <div className="p-8">
                            <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                            Description of your headline
                            </p>
                            <p className="text-white absolute bottom-12 right-10 ">write your massage</p>
                            <div  onClick={() => setShow(true)} className="bottom-0 cursor-pointer absolute p-2 right-0">
                                show Modal
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                         <div className={`absolute   top-0  right-0 left-0 m-auto bottom-0 ${show ? ' z-40 bg-slate-200 bg-opacity-10' : ' z-0'} `} >
                         <Modal onClose={() => setShow(false)} show={show} className="" />
                         </div>
</div>
    </>
  )
}

