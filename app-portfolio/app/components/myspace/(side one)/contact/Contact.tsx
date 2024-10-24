import styles from "./contact.module.css";

const Contact = () => {
	return (
		<div className="content">
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>Contacting Kaesy</h1>
				</div>
				<div className={styles.links}>
					<ul>
						<li>
							|<a href="/">Send Message</a>
							{/* email */}
						</li>
						<li>
							<a href="https://www.linkedin.com/in/kaesy-nock/">
								Add to friends
							</a>
						</li>
						<li>
							|<a href="https://github.com/kaesynock">Add to Favorites</a>
						</li>
						<li>
							|<a href="/">Forward to a Friend</a>
							{/* link share function */}
						</li>
						{/* Contact link will eventually point to email or contact form */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Contact