import ProfileImage from '@/shared/components/profileImage/ProfileImage'
import { useProfile } from '@/shared/hooks/useProfile'
import styles from './profile-block.module.scss'

function ProfileBlock() {
  const { profile, isLoading } = useProfile()

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div className={styles.block}>
      <ProfileImage letter={profile?.user.name ? profile.user.name[0] : 'A'} />
      <div className={styles['block__info']}>
        <p className={styles['block__user-name']}>
          {profile?.user.name ? profile.user.name : 'User'}
        </p>
        <p>{profile?.user.email}</p>
      </div>
    </div>
  )
}

export default ProfileBlock
