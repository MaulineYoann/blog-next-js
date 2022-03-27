import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link href='/'>Acceuil</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/utilisateurs'>Liste</Link>
    </nav>
  )
}

export default Navbar