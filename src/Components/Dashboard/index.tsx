import styles from "./dashboard.module.scss";

// IMG USER
import img_user from "../../assets/imgs/profile_user.png";
// import img_box_work from "../../assets/box_imgs/icon-work.svg"

export default function Dashboard() {
  return (
    <>
      <div className={styles.main_tracking}>
        <div className={styles.report_user}>
          <div className={styles.user_name}>
            <div className={styles.div_icon_user}>
              <img
                className={styles.img_profile}
                src={img_user}
                alt="user profile"
              />
            </div>
            <div className={styles.div_icon_user_name}>
              <p>Report for</p>
              <h3>
                Jeremy
                <br /> Robson
              </h3>
            </div>
          </div>
          <div className={styles.activity_schedule}>
            <ul className={styles.ul_schedule}>
              <li className={styles.li_unhover}>Daily</li>
              <li>Weekly</li>
              <li className={styles.li_unhover}>Monthly</li>
            </ul>
          </div>
        </div>
        <div className={styles.acivity_week_boxss}>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_1}></div>
            <div className={styles.details_box_1}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Work</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>32hrs</h3>
                <p>Last Week - 36hrs</p>
              </div>
            </div>
          </div>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_2}></div>
            <div className={styles.details_box_2}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Play</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>10hrs</h3>
                <p>Last Week - 36hrs</p>
              </div>
            </div>
          </div>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_3}></div>
            <div className={styles.details_box_3}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Work</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>4hrs</h3>
                <p>Last Week - 7hrs</p>
              </div>
            </div>
          </div>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_4}></div>
            <div className={styles.details_box_4}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Work</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>4hrs</h3>
                <p>Last Week - 5hrs</p>
              </div>
            </div>
          </div>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_5}></div>
            <div className={styles.details_box_5}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Work</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>4hrs</h3>
                <p>Last Week - 5hrs</p>
              </div>
            </div>
          </div>
          <div className={styles.box_acivitiy}>
            <div className={styles.sticker_box_6}></div>
            <div className={styles.details_box_6}>
              <div className={styles.info_card_title}>
                <p className={styles.headline_box}>Work</p>
                <p className={styles.headline_dotes}>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                  <div className={styles.dote}></div>
                </p>
              </div>
              <div className={styles.info_card_hours}>
                <h3 className={`${styles.hours_acivity}`}>2hrs</h3>
                <p>Last Week - 2hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
