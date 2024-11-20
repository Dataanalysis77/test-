import { FunctionComponent } from "react";
import UploadScreen from "../components/UploadScreen";
import RightPanel from "../components/RightPanel";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <UploadScreen />
      <RightPanel />
    </div>
  );
};

export default Desktop;
