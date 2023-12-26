import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment ..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to wrote a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.avatar}
              width={50}
              height={50}
              alt="profile-picture"
            />
            <div className={styles.userInfo}>
              <span>John Doe</span>
              <span className={styles.date}>22.09.2023</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            rerum ipsum, maxime laudantium nihil dolore veritatis perferendis
            facilis labore minima repellendus enim officia accusamus laborum
            est! Veritatis, eligendi vel. Magnam?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.avatar}
              width={50}
              height={50}
              alt="profile-picture"
            />
            <div className={styles.userInfo}>
              <span>John Doe</span>
              <span className={styles.date}>22.09.2023</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            rerum ipsum, maxime laudantium nihil dolore veritatis perferendis
            facilis labore minima repellendus enim officia accusamus laborum
            est! Veritatis, eligendi vel. Magnam?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.avatar}
              width={50}
              height={50}
              alt="profile-picture"
            />
            <div className={styles.userInfo}>
              <span>John Doe</span>
              <span className={styles.date}>22.09.2023</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            rerum ipsum, maxime laudantium nihil dolore veritatis perferendis
            facilis labore minima repellendus enim officia accusamus laborum
            est! Veritatis, eligendi vel. Magnam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
