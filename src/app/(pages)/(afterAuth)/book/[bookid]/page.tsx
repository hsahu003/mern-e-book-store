"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import styles from './Book.module.css'
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"


const page = () => {
  const { bookid } = useParams();
  const router = useRouter();
  
  const book = {
    id: bookid,
    Image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    description: "<p>This is a great book about programming</p>",
    amazonBuyLink: "https://www.amazon.com/book",
    title: "The Programming Book",
    author: "John Doe",
    price: 19.99
  }
  
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={book.Image}
              alt={book.title}
              width={500}
              height={500}
              className={styles.bookImage}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.bookTitle}>{book.title}</h1>
            <p className={styles.bookAuthor}>by {book.author}</p>
            <div
                className={styles.bookDescription}
                dangerouslySetInnerHTML={{ __html: book.description }}
            />
            <p className={styles.bookPrice}>{book.price}</p>

            <button className={styles.purchaseButton}
                        onClick={() => {
                               // add payment check here


                                // assuming already paid
                            router.push(`/read/${bookid}`)
                        }}
            >Start Reading</button>
            {/* <button className={styles.purchaseButton}>Buy on Amazon</button> */}
          </div>
      </div>
    </div>
  )
}

export default page