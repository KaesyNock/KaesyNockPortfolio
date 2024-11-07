import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<nav className={styles.container}>
			<div className="container">
				
					<Image
						className="images"
						src="/blacklogo.svg"
						alt="kaesynocklogo"
						width={80}
						height={80}
						priority
					/>
				
				<div className="title"></div>
				<h1>Kaesy Nock</h1>
				<div className="links">
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

export default Footer;
