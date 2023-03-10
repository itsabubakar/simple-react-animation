import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="text-xl font-medium z-10 relative">
            <ul className="flex gap-12">
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar