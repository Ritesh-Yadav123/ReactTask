import React from 'react'
import styles from './Children.module.css'

function Children({children}) {
  return (
    <div className={styles.child}>
        {children}
    </div>
  )
}

export default Children
