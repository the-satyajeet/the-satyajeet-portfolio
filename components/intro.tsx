import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className=" flex items-center justify-center">
            <Image src="https://unsplash.com/photos/mans-grey-and-black-shirt-ILip77SbmOE" alt="Satyajeet Portrait" width="192" height="192" quality="95"/>
        </div>
    </section>
  )
}
