import React from 'react'
import experience1 from '../../../assets/images/main/Experience/proyecto1.png'
import experience2 from '../../../assets/images/main/Experience/proyecto2.png'
import experience3 from '../../../assets/images/main/Experience/proyecto3.png'
import experience4 from '../../../assets/images/main/Experience/proyecto4.png'
import experience5 from '../../../assets/images/main/Experience/proyecto5.jpg'
import holdingImage from '../../../assets/images/main/mision/medalla.jpg'
import './Image.scss'

function Image ({
  imageName
}) {
  const selectImage = (name) => {
    switch (name) {
      case 'exp1':
        return experience1
      case 'exp2':
        return experience2
      case 'exp3':
        return experience3
      case 'exp4':
        return experience4
      case 'exp5':
        return experience5
      case 'holding':
        return holdingImage
      default :
        return 'addImageName'
    }
  }

  return (
    <figure className='image'>
      <img src={selectImage(imageName)} alt='' />
    </figure>
  )
}

export { Image }
