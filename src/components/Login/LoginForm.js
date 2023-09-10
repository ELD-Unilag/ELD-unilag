import Image from 'next/image';
import React,{useState} from 'react'
import Link from 'next/link';

const form = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (
    <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="/images/homeImages/gallery/image2.png"
          alt="/"
        />
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full h-full px-4 py-24">
          <div className="max-w-[450px] h-[450px] mx-auto relative bg-blue-900 rounded-md border-2 border-white text-white ">
            <div className="max-w-[320px] mx-auto py-12">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {/* {error ? (
                <p className="px-3 py-1 rounded bg-red-500 mt-5">{error}</p>
              ) : null} */}
              <form
                // onSubmit={handleLogIn}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" p-3 my-2 rounded bg-gray-200 text-eldBlack outline-none"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className=" p-3 my-2 rounded bg-gray-200 text-eldBlack outline-none"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <button type='submit' className="bg-eldBlue py-3 my-6 rounded font-bold hover:bg-eldLightPink transition-all">
                  Login
                </button>
              </form>
            </div>
            <div className='absolute top-4 right-4 w-5 h-5'>
                <Link href={"/"}>
                    <Image alt='close button' src={"/images/utility/closeButton.svg"} fill/>
                </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default form