import React from 'react'
import { Icon } from '@iconify/react';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=IMAI+Churea+Producciones+La+Paz+Baja+California+Sur';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          <a href="tel:+526122341114">+52 612 234 1114</a>
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          <a href="mailto:contacto@imai.com">contacto@imai.com</a>
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            La Paz, Baja California Sur, México
          </a>
        </li>
      </ul>
    </>
  )
}
