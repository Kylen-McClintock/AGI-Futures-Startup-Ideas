import { redirect } from 'next/navigation';

export default function ForecastsIndex() {
    redirect('/forecasts/live');
}
