import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* SECOND PART OF THE MENU */}
      <div className={styles.middleMenu}>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories />
      </div>

      {/* THIRD PART OF THE MENU */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
