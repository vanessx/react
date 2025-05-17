import { useSearchParams } from 'react-router-dom';

export function useURLPosition() {
	const [searchParams] = useSearchParams(); // read data from the URL

	const lat = searchParams.get('lat');
	const lng = searchParams.get('lng');

	return [lat, lng];
}
