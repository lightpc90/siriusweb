import React from 'react'
import Nav from '@/components/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Row } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })

function contact() {
  return (
        <Row>
          <h1>Contact Page</h1>
        </Row>
  )
}

export default contact