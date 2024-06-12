import React from 'react'
import styles from '@/components/Admin/adminGlobalstyles.module.css'

const ErrorMessage = ({message}) => {
  return (
    <p className={styles.errorMessage}>{message}</p>
  )
}

export default ErrorMessage