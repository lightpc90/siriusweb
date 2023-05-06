import React from 'react'
import Nav from './navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container } from '@nextui-org/react'
import Head from 'next/head'

function Layout(props) {


  return (
        <Container>
            <Head>
                <title>Sirius862</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {props.children}
        </Container>
  )
}

export default Layout