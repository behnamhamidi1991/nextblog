import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>How to find the best place to travel to</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab
          voluptatum recusandae, et, voluptate accusamus sit voluptatibus ipsam
          molestias eveniet dolorum. Ipsum velit aliquam voluptates numquam
          exercitationem quas sunt dolores!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
