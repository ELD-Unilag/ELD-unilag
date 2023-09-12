import React from 'react'
import styles from '@/components/Admin/adminGlobalstyles.module.css'

const NoItems = ({text}) => {
  return (
    <h3 className={styles.noItems}>{text}</h3>
  )
}

export default NoItems