import { FunctionComponent } from "react";
import MessageBox from "./MessageBox";
import styles from "./RightPanel.module.css";

export type RightPanelType = {
  className?: string;
};

const RightPanel: FunctionComponent<RightPanelType> = ({ className = "" }) => {
  return (
    <section className={[styles.rightPanel, className].join(" ")}>
      <div className={styles.rightContent}>
        <div className={styles.assistantInfoWrapper}>
          <div className={styles.assistantInfo}>
            <img
              className={styles.mainGuyIcon1}
              loading="lazy"
              alt=""
              src="/main-guy-icon-1@2x.png"
            />
            <div className={styles.howCanIHelpYouWithYourRWrapper}>
              <div className={styles.howCanI}>
                How can i help you with your Report ?
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdownMenu}>
          <div className={styles.dropDownMenu}>
            <MessageBox />
          </div>
        </div>
        <div className={styles.reportDescription}>
          <div className={styles.reportTitle}>
            <h1 className={styles.rdaIndexReport}>RDA Index Report</h1>
          </div>
          <div className={styles.professionalAnalysisOfContainer}>
            <p className={styles.professionalAnalysisOf}>
              Professional analysis of your Reserve Study's
            </p>
            <p
              className={styles.comprehensivenessAndComplia}
            >{`Comprehensiveness, and compliance  with the industy standards.           `}</p>
          </div>
        </div>
        <div className={styles.reportFeatures}>
          <div className={styles.checkMarkText}>
            <div className={styles.featureContainer}>
              <div className={styles.featureItems}>
                <div className={styles.downloadLinks}>
                  <img
                    className={styles.downloadIcon}
                    loading="lazy"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.downloadIcon}
                    loading="lazy"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.downloadIcon}
                    loading="lazy"
                    alt=""
                    src="/download@2x.png"
                  />
                </div>
                <div className={styles.analysisFeatures}>
                  <div className={styles.analysisList}>
                    <div className={styles.instantAiAnalysis}>
                      Instant Ai Analysis
                    </div>
                    <div className={styles.professionalInsights}>
                      Professional Insights
                    </div>
                    <div className={styles.howCanI}>Component Verification</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.specialAssessment}>
              <img
                className={styles.downloadIcon3}
                alt=""
                src="/download@2x.png"
              />
              <div className={styles.specialAssessmentAnalysis}>
                Special Assessment Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
