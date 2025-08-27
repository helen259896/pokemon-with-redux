// import {NextPage} from 'next';
import { useRouter } from 'next/router';
import NotFound from './not-found';

const PokemonReview = ({
  params}: {
    params: {
      name: string;
      reviewId: string;
}}) => {
  const router = useRouter()
  const {name, reviewId} = router.query;
  if (reviewId && reviewId > '10') {
    return (
      <div><NotFound/></div>
    )
    
  }
  console.log('PokemonReview', params);
  console.log('PokemonReview router', router);
  console.log('PokemonReview router', name, reviewId);
  return (
    <div>
      <div>This is pokemon review page</div>
      <div>pokemon name: {name}</div>
      <div>pokemon reviewId: {reviewId}</div>
    </div>
  )
}

export default PokemonReview;