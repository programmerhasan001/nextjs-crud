import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-5 px-8 bg-slate-800 rounded-md mt-3">
            <Link className="text-white font-bold text-xl font-mono tracking-wider" href={'/'}>Home</Link>
            <Link className="text-white font-bold text-xl font-mono border border-red-300 py-1 px-3 rounded-sm" href={'/add-topic'}>Add Topic</Link>
        </nav>
    )
}