import React from 'react'
import styles from './styles.module.css'
import { NitTable } from './NitTable'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export default NitTable
