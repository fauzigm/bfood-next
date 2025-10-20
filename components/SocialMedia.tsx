import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import {
    RiFacebookFill,
    RiGithubLine,
    RiInstagramLine,
    RiTiktokFill,
    RiWhatsappLine
} from "react-icons/ri";
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Github",
        href: "https://www.github.com/@fauzigm",
        icon: <RiGithubLine className='w-5  h-5' />
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/@bfood-cateringbatu",
        icon: <RiInstagramLine className='w-5  h-5' />
    },
    {
        title: "TikTok",
        href: "https://www.tiktok.com/@bfood-cateringbatu",
        icon: <RiTiktokFill className='w-5  h-5' />
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/@bfood-cateringbatu",
        icon: <RiFacebookFill className='w-5  h-5' />
    },
    {
        title: "Whatsapp",
        href: "https://www.whatsapp.com/",
        icon: <RiWhatsappLine className='w-5  h-5' />
    }
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn('flex items-center gap-3.5', className)}>
                {socialLink?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item?.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect", iconClassName)}
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}
                        >
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia