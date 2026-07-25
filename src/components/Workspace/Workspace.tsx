import { Header } from "../Header/Header";
import { ShopSpace } from "../ShopSpace/ShopSpace";
import styles from "./Workspace.module.css";

export function Workspace() {
  return (
    <div className={styles.container}>
      <header>
        <Header/>
      </header>
      <main>
        <ShopSpace/>
      </main>
    </div>
  );
}
