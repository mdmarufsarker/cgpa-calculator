import Link from 'next/link'
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function header() {
  return (
    <header className='py-8'>
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"} className="font-medium uppercase text-3xl">CGPA Calculator</Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href={"https://www.facebook.com/mdmarufsarkerr"}><ImFacebook color="#888888" /></Link>
                    <Link href={"https://twitter.com/md_marufsarker"}><ImTwitter color="#888888" /></Link>                    
                    <Link href={"https://www.youtube.com/@maruf_sarker?sub_confirmation=1"}><ImYoutube color="#888888" /></Link>
                </div>
            </div>
        </div>
    </header>
  )
}