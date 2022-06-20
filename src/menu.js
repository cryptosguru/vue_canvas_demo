import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiSquareEditOutline,
  mdiTable
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
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    }
  ]
]
