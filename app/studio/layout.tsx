import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "BFOOD-Catering",
  description: "Catering Batu melayani semua semua jenis catering untuk semua acara",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;