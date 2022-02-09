import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
// import Footer from '../components/Footer'


export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props: {
      users: data
    }
  }
}
export default function Home({users}) {

  return (
    <div className={styles.container}>
      <title>asmmorshed</title>
      
      <h2>Home page</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
     <h2>All Users</h2>
     {users.map(user => (
       
        <div key={user.id}>
          <Link href={'/user/'+user.id}>{user.name}</Link>
          </div>   
       ))
     }
    </div>
  )
}
