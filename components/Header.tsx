'use client';

import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { useUser } from "@clerk/nextjs";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
import CartIcon from "./CartIcon";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="border-b border-b-gray-400 py-5 px-5 sticky top-0 z-50 bg-white">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-5">
          <MobileMenu />
          <Logo>BFOOD</Logo>
        </div>
        <div className="flex items-center md:w-1/3 w-auto justify-end gap-5">
        <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className='group relative'>
                <ListOrdered className='w-5 h-5 group-hover:text-darkColor hoverEffect' />
                <span className='absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <div className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Login
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}