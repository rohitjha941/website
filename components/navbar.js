import styles from '../css/navbar.module.scss';
import Link from 'next/link';
import { LinkedIn, Email, GitHub } from '../constants/links';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';



export default function Navbar() {
    return (
        <nav className={styles.nav} >
            <Link href='/' className={styles.name}>Rohit Jha</Link>
            <div className='grow flex flex-row-reverse items-center'>
                <div className={styles.socials}>
                    <a href={`mailto:${Email}`}><UilEnvelope size="30" color="#A7A7A7" /></a>
                    <a href={LinkedIn}><UilLinkedin size="30" color="#A7A7A7" /></a>
                    <a href={GitHub}><UilGithub size="30" color="#A7A7A7" /></a>
                </div>

                {
                /*<Link className={styles.link} href=''>Experience</Link>
                <Link className={styles.link} href=''>Contact </Link>
                */
                }
                <Link className={styles.link} href='#teck-stack'>Tech Stack </Link>
                <Link className={styles.link} href=''>Home </Link>



            </div>
        </nav>
    )
}
