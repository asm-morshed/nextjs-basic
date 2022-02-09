import Head from 'next/head'
import Image from 'next/image'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
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
const Users=({users})=> {

  return (
    <div>
      <title>User List</title>
      
      <h2>User List</h2>
      
     <h2>All Users</h2>
     {users.map(user => (
       
        <div key={user.id}>
          <Link href={'/users/'+user.id}>{user.name}</Link>
          </div>   
       ))
     }
    </div>
  )
}
export default Users