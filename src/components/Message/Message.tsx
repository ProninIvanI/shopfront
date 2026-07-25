import styles from "./Message.module.css";

type MessageProps = {
  text: string;
}

export function Message({text}: MessageProps) {
  return (
    <p className={styles.container} role="status" aria-live="polite">
      {text}
    </p>
  );
}
