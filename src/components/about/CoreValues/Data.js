import humility from '../../../../public/images/aboutImages/corevalues/humility.png'
import love from '../../../../public/images/aboutImages/corevalues/love.png'
import creativity from '../../../../public/images/aboutImages/corevalues/creativity.png'
import strength from '../../../../public/images/aboutImages/corevalues/strength.png'
import kind from '../../../../public/images/aboutImages/corevalues/kind.png'
import knowledge from '../../../../public/images/aboutImages/corevalues/knowledge.png'
import styles from './corevalues.module.css'


const data = {
 row1data: [
  {
   title: "Humility",
   imgURL: humility,
   bgColor: styles.humilityCardBg,
   imgstyle: styles.humilityImg
  },
  {
   title: "Love",
   imgURL: love,
   bgColor: styles.loveCardBg,
   imgstyle: styles.loveImg
  },
  {
   title: "Creativity",
   imgURL: creativity,
   bgColor: styles.creativityCardBg,
   imgstyle: styles.creativityImg
  },
 ],
 row2data: [
  {
   title: "Strength",
   imgURL: strength,
   bgColor: styles.strengthCardBg,
   imgstyle: styles.strengthImg
  },
  {
   title: "Kindness",
   imgURL: kind,
   bgColor: styles.kindCardBg,
   imgstyle: styles.kindnessImg
  },
  {
   title: "Knowledge",
   imgURL: knowledge,
   bgColor: styles.knowledgeCardBg,
   imgstyle: styles.knowledgeImg
  },
 ]
}


export default data;