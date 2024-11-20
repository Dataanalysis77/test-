import { FunctionComponent } from "react";
import styles from "./UploadScreen.module.css";

export type UploadScreenType = {
  className?: string;
};

const UploadScreen: FunctionComponent<UploadScreenType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.uploadScreen, className].join(" ")}>
      <div className={styles.uploadArea}>
        <div className={styles.uploadAreaContainer}>
          <div className={styles.uploadAreaInner}>
            <div className={styles.uploadAreaContent}>
              <img
                className={styles.weAreRda1Icon}
                loading="lazy"
                alt=""
                src="/Ed@2x.png"
              />
            </div>
            <div className={styles.uploadInstructions}>
              <div className={styles.uploadInstructionIconParent}>
                <img
                  className={styles.uploadInstructionIcon}
                  loading="lazy"
                  alt=""
                />
                <div className={styles.uploadInstructionContainer}>
                  <div className={styles.uploadInstructionContainerChild} />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.dragAndDragContainer}>
                      <p
                        className={styles.dragAndDrag}
                      >{`Drag and Drag your `}</p>
                      <p className={styles.dragAndDrag}>file here !</p>
                    </div>
                    <button className={styles.clickInstruction}>
                      <div className={styles.clickInstructionChild} />
                      <div
                        className={styles.clickToUpload}
                      >{`Click to upload `}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pngClipartOpenBoxGraphics} />
        <img
          className={styles.openBoxFlatBlueIcon1}
          alt=""
          src="/openboxflatblueicon-1@2x.png"
        />
        <div className={styles.section2}>
          <div className={styles.section2Child} />
          <div className={styles.section2Inner}>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadScreen;
