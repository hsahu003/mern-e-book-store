"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect } from 'react'
import styles  from './KindleLibrary.module.css'
import Image from 'next/image'
import { FaBookOpen } from 'react-icons/fa'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { MdBook } from 'react-icons/md'
import { useRouter } from 'next/navigation'

    const page = () => {
      const router = useRouter();
      const [show, setShow] = React.useState(false);
      const [allBooks, setAllBooks] = React.useState([]);

      const getData = ()  => {
          const temp = [
              {
                  title: 'The Alchemist',
                  image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
                  id: '1',
                  author: 'Paulo Coelho'
              },
              {
                  title: 'The Alchemist',
                  image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
                  id: '2',
                  author: 'Paulo Coelho'
              },
              {
                  title: 'The Alchemist',
                  image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
                  id: '3',
                  author: 'Paulo Coelho'
              }

          ];

          setAllBooks(temp);
      }

      useEffect(() => {
          getData();
      }, []);
      
      return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.left}>
                    <div className={styles.menuMain}>
                        <FaBookOpen className={styles.bookIcon} />
                        <p>Library</p>
                        {
                          show ? (<FaChevronDown
                            onClick={() => setShow(!show)}
                            className={styles.toRight}
                          /> 
                        ) : (<FaChevronRight 
                            onClick={() => setShow(!show)}
                            className={styles.toRight}
                          />
                        )}
                    </div>
                    {
                      show &&
                      <div className={styles.menuItems}>
                         <span>All Title</span>
                         <span>Books</span>
                         <span>Comics</span>
                         <span>Samples</span>
                      </div>
                    }
                    <div className={styles.menuMain}>
                        <MdBook className={styles.bookIcon2} />
                        <p>Notes and Highlights</p>
                    </div>

                </div>
                <div className={styles.right}>
                  <h1>Trending</h1>
                  <div className={styles.books}>
                    {allBooks.map((book:any) => (
                      <div onClick={()=>{
                        router.push(`/book/${book.id}`)
                      }} key={book.id} className={styles.bookItem}>
                           <Image 
                              src={book.image} 
                              alt={book.title} 
                              className={styles.bookImage}
                              width={100}
                              height={150}
                            />

                            <div className={styles.bookDetails}>
                                <h3 className={styles.bookTitle}>{book.title}</h3>
                                <p className={styles.bookAuthor}>
                                  {book.author}
                                </p>
                            </div>
                        </div>
                    ))}
                  </div>
                  <div>
                  </div>
                </div>
            </div>    
        </div>
      )
    }
    
    export default page