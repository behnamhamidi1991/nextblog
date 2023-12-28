import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return ( 
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet tiam get</h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src="/p1.jpeg" alt="" className={styles.avatar} fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>22.08.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" className={styles.image} fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus provident aliquid dicta magnam iure tempora pariatur
              dolores. Vero, excepturi? Harum, nobis culpa labore esse at
              expedita officiis? Sunt, odio et.
            </p>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus provident aliquid dicta magnam iure tempora pariatur
              dolores. Vero, excepturi? Harum, nobis culpa labore esse at
              expedita officiis? Sunt, odio et.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus provident aliquid dicta magnam iure tempora pariatur
              dolores. Vero, excepturi? Harum, nobis culpa labore esse at
              expedita officiis? Sunt, odio et.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
