import Image from "next/image";
import styles from "./contact.module.css";

import { ContactLinks } from "@/app/components/constants";
import { LinkIcons} from "@/public/assets/index";


const Contact = () => {
	return (
		<div className="content">
			<div className="display-flex align-items-center justify-content-space-between w-1/5">
				<div className={styles.title}>
					<h1>Contacting Kaesy</h1>
				</div>
				<div className={styles.links}>
					<ul>
						<li>
							{ContactLinks.map((contactlinks, index) => (
								<li key={contactlinks.url}>
									{contactlinks.title}
								</li>
							))}
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
};

export default Contact;
