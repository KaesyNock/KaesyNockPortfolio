import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.image}>
					<Image
						className={styles.logo}
						src="/logo.svg"
						alt="kaesynocklogo"
						width={250}
						height={80}
						priority
					/>
				</div>
				<div className={styles.title}></div>
				<h1>Kaesy Nock</h1>
				<div className={styles.links}>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/kaesy-nock/">LinkedIn</a>
						</li>
						<li>
							|<a href="https://github.com/kaesynock">Github</a>
						</li>
						<li>
							|<a href="/">Contact</a>
                        </li>
                        {/* Contact link will eventually point to email or contact form */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
