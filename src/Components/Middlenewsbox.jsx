import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRegBookmark, FaShareAlt, FaRegEye } from 'react-icons/fa';

const Middlenewsbox = ({ n }) => {
    

    const {
        author,
        title,
        details,
        image_url,
        rating,
        total_view,
        others_info,
        thumbnail_url
    } = n;

    return (
        <div className='border rounded-lg p-4 mb-5 shadow-sm'>
            {/* Author info */}
            <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-2'>
                    <Image
                    width={30}
                    height={30}
                        src={author?.img}
                        alt='turky'
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                        <p className='font-semibold text-sm'>{author?.name}</p>
                        <p className='text-xs text-gray-500'>
                            {author?.published_date?.split(' ')[0]}
                        </p>
                    </div>
                </div>
                <div className='flex gap-3 text-gray-500'>
                    <FaRegBookmark className='cursor-pointer' />
                    <FaShareAlt className='cursor-pointer' />
                </div>
            </div>

            {/* Title */}
            <h2 className='font-bold text-lg mb-3'>{title}</h2>

            {/* Image */}
            <div className='w-full h-64 relative mb-3'>
               <Image className='mx-auto' 
               fill
                sizes="400px"
                src={image_url}
                
                alt='turky'/>
            </div>

            {/* Details */}
            <p className='text-sm text-gray-600 mb-3'>
                {details?.slice(0, 150)}...
                <Link href={`/details/${n._id}`} className='text-orange-500 font-medium cursor-pointer'> Read More</Link>
            </p>

            {/* Footer - Rating & Views */}
            <div className='flex items-center justify-between border-t pt-3'>
                <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(rating?.number) ? 'text-yellow-400' : 'text-gray-300'}
                            size={14}
                        />
                    ))}
                    <span className='text-sm font-medium ml-1'>{rating?.number}</span>
                </div>
                <div className='flex items-center gap-1 text-gray-500 text-sm'>
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default Middlenewsbox;