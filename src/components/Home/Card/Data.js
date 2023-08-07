import hand from '../../../../public/images/homeImages/flipcards/Hand.png'
import gear from '../../../../public/images/homeImages/flipcards/Gear.svg'
import cross from '../../../../public/images/homeImages/flipcards/cross.png'
import styles from './flipCards.module.css'
const data = [
 {
  title: 'flip the course',
  imageStyle: styles.hand,
  image: hand,
  bg: styles.handCardBg2,
  imageText: styles.BlackImageText
 },
 {
  title: 'flip the course',
  imageStyle: styles.hand,
  image: hand,
  bg: styles.handCardBg,
  imageText:styles.BlackImageText
 },
 {
  title: 'girlboss is cliche, i am woman',
  imageStyle: styles.cross,
  image: cross,
  bg: styles.crossCardBg,
  imageText: styles.whiteImageText,
 },
 {
  title: 'wednesday addams',
  imageStyle: styles.gear,
  image: gear,
  bg: styles.gearCardBg,
  imageText: styles.BlackImageText
 },
]

export default data