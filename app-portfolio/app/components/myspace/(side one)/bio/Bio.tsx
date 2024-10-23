import React from 'react'
import styles from './bio.module.css'
import Image from 'next/image'

const Bio = () => {
  return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Kaesy Nock</b>
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src="/portfolioimage.jpg"
						alt=""
						width={200}
						height={300}
						className={styles.image}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>&quot;Full Stack Developer&quot;</h1>
          <p className={styles.postDesc}>
            Female, 34, Remote
          </p>
          <p className={styles.postDesc}>
            Last Login:
            <br />
            {/* date stamp */}
          </p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
}

export default Bio