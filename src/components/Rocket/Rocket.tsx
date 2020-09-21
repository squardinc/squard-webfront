import * as React from 'react'

import styles from './Rocket.module.scss'

import RocketBack from 'src/assets/about/rocket_back.svg'
import RocketFront from 'src/assets/about/rocket_front.svg'

export const Rocket: React.FC = (props) => {
  const wrapper = React.useRef();

  React.useEffect(() => {
    console.log(wrapper.current);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.rocketBack}>
        <RocketBack />
      </div>
      <div className={styles.rocketFront}>
        <RocketFront />
      </div>
    </div>
  )
}
