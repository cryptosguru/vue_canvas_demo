import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiSquareEditOutline,
  mdiTable,  
  mdiTelevisionGuide,
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'Canvas',
      icon: mdiTelevisionGuide
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    }
  ]
]
