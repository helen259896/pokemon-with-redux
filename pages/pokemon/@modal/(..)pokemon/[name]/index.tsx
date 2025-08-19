// import Modal from '@/components/Modal'
// import PhotoCard from '@/components/PhotoCard'
// import photos, { Photo } from '@/lib/photos'

export default function PhotoModal({
  params: { name }
}: {
  params: { name: string }
}) {
  // const photo: Photo = photos.find(p => p.id === id)!

  return (
    <div>this is modal {name} page</div>
  )
}