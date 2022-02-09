export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const datas = await res.json();
    console.log(datas)

    const paths = datas.map(data=>{
        return{
            params: {id: data.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}   

export const getStaticProps = async(context)=>{
    console.log("hi");
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json()
    return {
        props: {
            user: data
        }
    }
}
const Details = ({user})=>{
    console.log("HI", user.name);
    return (
        <div>
            <p>Here personal Details</p>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h1>{user.website}</h1>
        </div>
    )
}

export default Details