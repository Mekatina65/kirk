import { useRouter } from "next/router";
import Link from 'next/link'

const Nations = () => {
    const router = useRouter()
    const {params} = router.query
    return ( 
<div>
        <h1>{params}</h1>
         
         <Link href="../earth/country/canada/ontario"><a>Canada</a></Link> <br />
         <Link href="../earth/country/usa"><a>United States</a></Link> <br />
         <Link href="../earth/country/mexico"><a>Mexico</a></Link> <br />

         <Link href="../"><a>back to home page</a></Link>
        
         </div>
        
     );
}
 
export default Nations;