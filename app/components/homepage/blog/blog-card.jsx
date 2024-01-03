// @flow strict
import { timeConverter } from '@/utils/timeConverter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#2a2e5a] hover:border-[rgb(70,76,106)] transition-all duration-500 bg-[#101123] rounded-lg relative"
    >
      <div className="h-56 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-4 flex flex-col">
        <div className="flex justify-between items-center text-[#4ccfaf] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-4 ">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-4 cursor-pointer text-lg sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-3 text-sm text-[#4ccfaf]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-base text-[#d3d8e8] pb-6'>
          {blog.description}
        </p>
        <div className="absolute right-3 bottom-3">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;