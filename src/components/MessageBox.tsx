import { FunctionComponent } from "react";
import styles from "./MessageBox.module.css";

export type MessageBoxType = {
  className?: string;
};

const MessageBox: FunctionComponent<MessageBoxType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.download1Icon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/download-1@2x.png"
    />
  );
};

export default MessageBox;
