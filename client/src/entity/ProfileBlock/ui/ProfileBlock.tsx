import ProfileImage from '@/shared/components/profileImage/ProfileImage'
import { useProfile } from '@/shared/hooks/users/use-profile'
import styles from './profile-block.module.scss'

function ProfileBlock() {
  const { user, isLoading } = useProfile()

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div className={styles.block}>
      <ProfileImage letter={user?.name ? user.name[0] : 'A'} />
      <div className={styles['block__info']}>
        <p className={styles['block__user-name']}>
          {user?.name ? user.name : 'User'}
        </p>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}

export default ProfileBlock
