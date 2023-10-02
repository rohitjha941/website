import { Email, GitHub, LinkedIn } from '@/constants/links';
import styles from '@/css/footer.module.scss';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons'
import Text from './text';


export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.stroke} />
            <br />
            <div className={styles.container}>
                <a href={`mailto:${Email}`}><UilEnvelope size="30" color="#A7A7A7" /></a>
                <a href={LinkedIn}><UilLinkedin size="30" color="#A7A7A7" /></a>
                <a href={GitHub}><UilGithub size="30" color="#A7A7A7" /></a>
            </div>
            <br />
            <center>
                <Text>
                    Developed with <span className={styles.heart}>&hearts;</span> by Rohit Jha. Inspired from <u><a target="_blank" href="https://www.figma.com/community/file/1116246660507537002/developer-portfolio-design">Pavan MG</a></u>
                </Text>
            </center>
        </div >
    )
}
