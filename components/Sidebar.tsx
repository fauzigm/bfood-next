import React, { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          ref={sidebarRef}
          className="fixed inset-0 z-50 bg-black/50 cursor-auto"
          onClick={onClose} // Click overlay to close
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            
            className="min-w-72 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            role="dialog"
            aria-modal="true"
            aria-labelledby="sidebar-title"
          >
            <div className='flex items-center justify-between'>
              <button onClick={onClose}>
                <Logo className='text-white'>BFOOD</Logo>
              </button>
              <button
                className='hover:text-red-500 hoverEffect p-2 rounded-md hover:bg-white/10'
                onClick={onClose}
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            <div className='flex flex-col gap-4 text-base font-semibold tracking-wide'>
              {headerData?.map((item) => (
                <Link
                  onClick={onClose}
                  key={item?.title}
                  href={item?.href}
                  className={`hover:text-white hoverEffect w-24 ${pathname === item?.href && "text-white"}`}
                >
                  {item?.title}

                </Link>
              ))}
            </div>
            <SocialMedia />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;