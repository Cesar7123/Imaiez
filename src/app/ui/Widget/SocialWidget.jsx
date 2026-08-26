import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://facebook.com/Imaiez' target="_blank" rel="noopener noreferrer" className="cs-center">
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link href='https://instagram.com/imaiez' target="_blank" rel="noopener noreferrer" className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
    </Div>
  )
}
