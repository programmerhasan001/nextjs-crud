import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import RemoveBtn from './RemoveBtn';

export default function TopicsList() {
    return (
        <div className='p-4 border border-slate-300 my-3 flex items-start justify-between gap-5'>
            <div>
                <h2 className='font-bold text-2xl'>Topic Title</h2>
                <p>Topic Description</p>
            </div>
            <div className='flex gap-x-2'>
                <Link href={'/edit-topic/123'}>
                    <BiEdit size={24} />
                </Link>
                <Link href={'/'}>
                    <RemoveBtn />
                </Link>
            </div>
        </div>
    )
}
