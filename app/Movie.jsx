// import Link from "next/link"
// import Image from "next/image"

// export default function Movie ({title, id, poster_path, release_date}) {
//     const imagePath='https://image.tmdb.org/t/p/original'
//     console.log(imagePath)
//     // console.log(poster_path)
//   return (
//     <div>
//         <h1>{title}</h1>
//         <h2>{release_date}</h2>
//           <link href={`/${id}`}>
//               <Image src={imagePath+poster_path} width={800} height={800} alt={title}/>
//           </link>

//     </div>
//   )
// }
import Link from "next/link"
import Image from "next/image"

export default function Movie({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
    </div>
  )
}
