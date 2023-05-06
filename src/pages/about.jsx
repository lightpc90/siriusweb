import Nav from '@/components/navbar'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, Container, Row } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })

function about() {
  return (
        <Row>
            <h1>About Page</h1>
        </Row>
  )
}

export default about