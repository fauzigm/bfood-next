import { MapPin, MessageSquare, Phone } from 'lucide-react';
import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    icon: React.ReactNode
}
const data: Props[] = [
    {
        title: "Visit Us",
        subtitle: "Jl Martorejo No. 5, Punten, Batu, Jawa Timur",
        icon: (
            <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors w-4 h-4" />
        ),
    },
    {
        title: "Call Us",
        subtitle: "+62 877 9205 3999",
        icon: (
            <Phone className="text-gray-600 group-hover:text-darkColor transition-colors w-4 h-4" />
        ),
    },
    {
        title: "Email",
        subtitle: "bfoodcatering@gmail.com",
        icon: (
            <MessageSquare className="text-gray-600 group-hover:text-darkColor transition-colors w-4 h-4" />
        ),
    },
]
const FooterTop = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 border-b'>
            {data?.map((item, index) => (
                <ContactItem
                    key={index}
                    icon={item?.icon}
                    title={item?.title}
                    subtitle={item?.subtitle}
                />
            ))}
        </div>
    );
};

const ContactItem = ({ icon, title, subtitle }: Props) => {
    return <div className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors'>
        {icon}
        <div >
            <h3 className='font-semibold text-gray-900 group-hover:text-darkColor transition-colors'>
                {title}
            </h3>
            <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors'>
                {subtitle}
            </p>
        </div>
    </div>
}

export default FooterTop