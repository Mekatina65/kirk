import Link from "next/link";
const Base = () => {
    return (         
        <div>
    <h1>which continent earth index.js</h1>
    <Link href="earth/southamerica"><a>South America</a></Link> <br />
    <Link href="earth/northamerica"><a>North America</a></Link> <br />    
    <Link href="/"><a>back to home page</a></Link> <br />    
   </div>
     );
} 
export default Base;