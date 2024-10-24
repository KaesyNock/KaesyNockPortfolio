import styles from "./techStack.module.css";
import {
	Languages,
	Frameworks,
	Libraries,
	Databases,
	Design,
	CodeTools,
	NotCodeTools,
	Cloud,
	OperatingSystems,
} from "../../../constants/index";

const TechStack = () => {
    return (
        <div id="sideOne">
		<div className={styles.content}>
			<div className={styles.sideOne}>
				<div className={styles.container}>
					<div className={styles.table}>
						<table>
                                <thead>
                                    <h2>Tech Stack</h2>
                                </thead>
							<tbody>
								<tr>
									<td className={styles.title}>Languages:</td>
									<td className={styles.list}>
										{Languages.map((language) => (
											<li key={language}>{language}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Frameworks:</td>
									<td className={styles.list}>
										{Frameworks.map((framework) => (
											<li key={framework}>{framework}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Libraries:</td>
									<td className={styles.list}>
										{Libraries.map((library) => (
											<li key={library}>{library}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Databases:</td>

									<td className={styles.list}>
										{Databases.map((databases) => (
											<li key={databases}>{databases}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Design:</td>

									<td className={styles.list}>
										{Design.map((design) => (
											<li key={design}>{design}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Code Tools:</td>

									<td className={styles.list}>
										{CodeTools.map((codetools) => (
											<li key={codetools}>{codetools}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>!Code Tools:</td>

									<td className={styles.list}>
										{NotCodeTools.map((notCodeTools) => (
											<li key={notCodeTools}>{notCodeTools}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Cloud:</td>
									<td className={styles.list}>
										{Cloud.map((cloud) => (
											<li key={cloud}>{cloud}</li>
										))}
									</td>
								</tr>

								<tr>
									<td className={styles.title}>Operating Systems:</td>

									<td className={styles.list}>
										{OperatingSystems.map((operatingSystems) => (
											<li key={operatingSystems}>{operatingSystems}</li>
										))}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
            </div>
            </div>
	);
};

export default TechStack;
