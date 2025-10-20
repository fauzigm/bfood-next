'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function CartIcon() {
  return (
    <Link href="/cart" className="relative flex items-center">
      <ShoppingBag className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-darkColor text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
          0
        </span>

    </Link>
  )
}