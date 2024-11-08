import Link from "next/link";
import './header.css'
import { CircleUserRound, House, NotebookTabs } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      {/* logo */}
      <div>
        <Link href='/'>
        <Image src="/logo.png" alt="giaic" width={50} height={50} />
        </Link>
      </div>
      {/* navigation list */}
      <div>
      <div className="menu-toggle">☰</div>
        <nav>
          <ul>
            <li>
              <House /><Link href="/">Home</Link>
            </li>
            <li>
              <NotebookTabs />
              <Link href="/about">about</Link>
            </li>
            <li>
              <CircleUserRound/>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* action buttton */}
      {/* <div>
        <button>sign up</button>
      </div> */}
    </header>
  );
};

export default Header;
