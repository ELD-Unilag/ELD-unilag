import React from 'react'
import styles from './dashboard.module.css'
import data from './dashboardData'
import AdminLink from './AdminLink'

const AdminHome = () => {
 const activitiesLinks = data.activities.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
 const wcwLinks = data.wcw.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
 const donationsLinks = data.donations.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
 const galleryLinks = data.gallery.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
 const newsLinks = data.news.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
 const ladiesboardLinks = data.ladiesboard.map((each, idx) => {
  return <AdminLink 
            name={each.name}
            routeName={each.routename}
            key={idx}
         />
 })
  return (
    <section className=''>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Manage Activities</h3>
      <div className={`${styles.linksContainer}`}>
       {activitiesLinks}
      </div>
     </div>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Manage WCW</h3>
      <div className={`${styles.linksContainer}`}>
       {wcwLinks}
      </div>
     </div>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Manage Gallery</h3>
      <div className={`${styles.linksContainer}`}>
       {galleryLinks}
      </div>
     </div>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Manage Donations</h3>
      <div className={`${styles.linksContainer}`}>
       {donationsLinks}
      </div>
     </div>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Manage News</h3>
      <div className={`${styles.linksContainer}`}>
       {newsLinks}
      </div>
     </div>
     <div className={styles.subSection}>
      <h3 className={styles.header}>Ladies Board</h3>
      <div className={`${styles.linksContainer}`}>
       {ladiesboardLinks}
      </div>
     </div>
    </section>
  )
}

export default AdminHome