import Link from "next/link";

export default function F1() {
  return ( 
    <div>
      <div>This is F1 page</div>
      <Link href='/user/f1/f2'>F2 page</Link>
    </div>
  )
}