import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function MyFooter() {
  return (
    <>
      <Footer container className="bg-blue-700 relative bottom-0 rounded-none text-center dark:bg-blue-950">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h1 className='text-white text-3xl font-semibold'><i class="fa-solid fa-newspaper"></i> The News</h1>
          <FooterLinkGroup className='sm:flex justify-center pt-5'>
            <FooterLink className='text-white text-xl' href="https://www.linkedin.com/in/malk-mohamed-55966a2b9/"><i class="fa-brands fa-linkedin hover:transition-all hover:scale-150"></i></FooterLink>
            <FooterLink className='text-white text-xl' href="https://github.com/malknabil"><i class="fa-brands fa-github hover:transition-all hover:scale-150"></i></FooterLink>
            <FooterLink className='text-white text-xl' href="https://www.facebook.com/profile.php?id=100006942375122&locale=ar_AR"><i class="fa-brands fa-facebook hover:transition-all hover:scale-150"></i></FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright className='text-xl text-white' href="#" by="Malk Nabil" year={2025} />
      </div>
    </Footer>
    </>
  )
}
