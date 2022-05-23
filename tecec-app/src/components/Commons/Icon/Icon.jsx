import React from 'react'
import tableroIcon from '../../../assets/images/icons/tableroIcon.png'
import autocadIcon from '../../../assets/images/icons/autocadIcon.png'
import certificationIcon from '../../../assets/images/icons/certificationIcon.png'
import proyectosIcon from '../../../assets/images/icons/proyectosIcon.png'
import instagramIcon from '../../../assets/images/icons/instagramIcon.svg'
import gmailIcon from '../../../assets/images/icons/gmailIcon.svg'
import linkedinIcon from '../../../assets/images/icons/linkedinIcon.png'
import './Icon.scss'

function Icon ({
  className,
  iconName
}) {
  const selectIcon = (name) => {
    switch (name) {
      case 'tablero':
        return tableroIcon
      case 'cad':
        return autocadIcon
      case 'certificación':
        return certificationIcon
      case 'proyectos':
        return proyectosIcon
      case 'gmail':
        return gmailIcon
      case 'linkedin':
        return linkedinIcon
      case 'instagram':
        return instagramIcon
      default:
        return 'addIconName'
    }
  }
  return (
    <>
      <figure className={`${className} icon`}>
        <img src={selectIcon(iconName)} alt='' />
      </figure>
    </>
  )
}

export { Icon }
