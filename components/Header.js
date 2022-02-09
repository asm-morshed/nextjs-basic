import Link from "next/link"

const Header=()=>{
    return (
        <header className="header-area">
            <div className="logo">
                <p>asmmorshed</p>
            </div>
            <div className="menu">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='./users/'>Users</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header