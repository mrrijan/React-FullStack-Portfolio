import Styles from "./SkillStyles.module.css";
import checkMarkDarkIcon from "../../assets/checkmark-dark.svg";
import checkMarkLightIcon from "../../assets/checkmark-light.svg";

import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkLightIcon : checkMarkDarkIcon;
  return (
    <section id="skills" className={Styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={Styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="HTML" />
        <SkillList icon={checkMarkIcon} skill="CSS" />
        <SkillList icon={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={Styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="React" />
        <SkillList icon={checkMarkIcon} skill="Vue" />
        <SkillList icon={checkMarkIcon} skill="Tailwind" />
        <SkillList icon={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={Styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="Redux" />
        <SkillList icon={checkMarkIcon} skill="Pinia" />
        <SkillList icon={checkMarkIcon} skill="Git" />
      </div>
      <hr />
      <div className={Styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="Laravel" />
        <SkillList icon={checkMarkIcon} skill="Node" />
        <SkillList icon={checkMarkIcon} skill="Docker" />
        <SkillList icon={checkMarkIcon} skill="Flutter" />
      </div>
    </section>
  );
}

export default Skills;
