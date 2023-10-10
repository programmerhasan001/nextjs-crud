import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import RemoveBtn from './RemoveBtn';


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics')
        if (!res.ok) {
            throw new Error("Failed to fetch Data");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default async function TopicsList() {

    const { topics } = await getTopics();

    return (
        <>
            {
                topics.length > 0 && topics.map(topic => {
                    const { title, description, _id } = topic;
                    console.log(topic)
                    return (
                        <div className='p-4 border border-slate-300 my-3 flex items-start justify-between gap-5'>
                            <div>
                                <h2 className='font-bold text-2xl'>{title}</h2>
                                <p>{description}</p>
                            </div>
                            <div className='flex gap-x-2'>
                                <Link href={`/edit-topic/${_id}`}>
                                    <BiEdit size={24} />
                                </Link>
                                <Link href={`/${_id}`}>
                                    <RemoveBtn />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
