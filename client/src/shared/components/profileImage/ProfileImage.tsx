import styles from './profile-image.module.scss'

type ProfileImageProps = {
  letter: string
}

function ProfileImage(props: ProfileImageProps) {
  return (
    <div className={styles.image}>
      <span>{props.letter}</span>
    </div>
  )
}

export default ProfileImage
