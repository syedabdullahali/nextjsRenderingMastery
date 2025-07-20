import { connectToDB } from '@/lib/mongoose';
import { user } from '@/models/User';
import DataDisplay from '../../../components/DataDisplay';

export async function getStaticProps() {
  await connectToDB();
  const userData = await user.find();

  return {
    props: { data: JSON.parse(JSON.stringify(userData)) },
    revalidate: 60,
  };
}

export default function SSGPage({ data }: { data: any[] }) {
  return (
    <div>
      <h1>SSG Page</h1>
      <DataDisplay data={data} />
    </div>
  );
}
