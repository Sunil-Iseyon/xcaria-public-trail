// "use client";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";

// export const Navigation: React.FC = () => {
// 	const ref = useRef<HTMLElement>(null);
// 	const [isIntersecting, setIntersecting] = useState(true);

// 	useEffect(() => {
// 		if (!ref.current) return;
// 		const observer = new IntersectionObserver(([entry]) =>
// 			setIntersecting(entry.isIntersecting),
// 		);

// 		observer.observe(ref.current);
// 		return () => observer.disconnect();
// 	}, []);

// 	return (
// 		<header ref={ref}>
// 			<div
// 				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
// 					isIntersecting
// 						? "bg-zinc-900/0 border-transparent"
// 						: "bg-zinc-900/500  border-zinc-800 "
// 				}`}
// 			>
// 				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
// 					{/* <div className="flex justify-between gap-8">
// 						<Link
// 							href="/projects"
// 							className="duration-200 text-zinc-400 hover:text-zinc-100"
// 						>
// 							Projects
// 						</Link>
// 						<Link
// 							href="/contact"
// 							className="duration-200 text-zinc-400 hover:text-zinc-100"
// 						>
// 							Contact
// 						</Link>
// 					</div> */}

// 					<Link
// 						href="/"
// 						className="duration-200 text-zinc-300 hover:text-zinc-100"
// 					>
// 						<ArrowLeft className="w-6 h-6 " />
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

"use client";

import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Ensure you import the correct icons
// import { logOut } from '../app/logout/action';
import {logOut} from '../utils/actions/auth-actions'

function Nav() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  const fadeInUpAnimation = {
	hidden: {
	  opacity: 0,
	  y: -30,
	},
	show: {
	  opacity: 1,
	  y: 0,
	  transition: {
		staggerChildren: 0.2,
		duration: .8,
	  },
	},
  };
  return (
	// backdrop-blur
	<header ref={ref}>
	  <div
		className={`fixed inset-x-0 top-0 z-50  duration-200 border-b ${
		  isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500 border-zinc-800 backdrop-blur text-white"
		}`}
	  >
		<motion.div
		 className="container flex items-center justify-between p-6 mx-auto"
		 initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}

		 >
		  {/* Logo on the left */}
		  <Link href="/" className="flex items-center">
			<h1 className="text-xl font-bold text-white">xCaria</h1>
		  </Link>
  
		  {/* Navigation Links in the middle */}
		  <div className="flex-1 text-center gap-4">
			<Link href="/showcase" className={` ${isIntersecting?'px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200':'text-white px-4 hover:text-zinc-400'}`}>
			  Product
			</Link>
			<Link href="/blog" className={` ${isIntersecting?'px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200':'text-white px-4 hover:text-zinc-400'}`}>
			  Blog
			</Link>
		  </div>
  
		  {/* Action buttons on the right */}
		  <div className="flex items-center gap-4">
		  <Link href="/aboutus" className={` ${isIntersecting?'px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200':'text-white px-4 hover:text-zinc-400'}`}>
			  About Us
			</Link>
			<Link href="/login"className={` ${isIntersecting?'px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200':'text-white px-4 hover:text-zinc-400'}`}>
			  Sign In
			</Link>
			{/* <form action={logOut}>
			<button type="submit" className="px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200">
			  Contact Us
			</button></form> */}
			<Link href="/contact" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 duration-200">
			  Contact Us
			</Link>
		  </div>
		</motion.div>
	  </div>
	</header>
  );
}

export default Nav;