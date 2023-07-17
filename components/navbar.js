import styles from '../components/navbar.css'
import 'animate.css';
import Link from 'next/link'

export default function Navbar() {
    return (    <div id="nav" className="animate__animated animate__fadeIn animate__delay-1s">
    <div id="logo"><a href="#">J.</a></div>

    <Link className="link" href="/projects">projects</Link>
    <Link className="link" href="/about">about</Link>


</div>
    );
}