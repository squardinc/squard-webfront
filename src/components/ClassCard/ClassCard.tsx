import * as React from 'react'

import styles from './ClassCard.module.scss'

import { GradientCard } from '../GradientCard/GradientCard'

interface ClassCardProps {
  logo: any
  title: string
  description: string
}

export const ClassCard: React.FC<ClassCardProps> = (props) => {
  return (
    <GradientCard>
      <div className={styles.logo}>{props.logo}</div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </GradientCard>
  )
}
