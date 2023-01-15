import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"https://www.facebook.com/mdmarufsarkerr"}><ImFacebook color="#888888" /></Link>
                    <Link href={"https://twitter.com/md_marufsarker"}><ImTwitter color="#888888" /></Link>                    
                    <Link href={"https://www.youtube.com/@maruf_sarker?sub_confirmation=1"}><ImYoutube color="#888888" /></Link>
              </div>
              <p className="py-5 text-gray-600">Copyright ©{year} All rights reserved - <Link href={"https://www.youtube.com/@maruf_sarker?sub_confirmation=1"} className="text-gray-400">Md. Maruf Sarker</Link></p>
          </div>
      </div>
    </footer>
  )
}