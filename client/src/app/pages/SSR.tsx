import { connectToDB } from '@/lib/mongoose';
import { user } from '@/models/User';
import DataDisplay from '../../../components/DataDisplay';

export async function getServerSideProps() {
  await connectToDB();
  const userData = await user.find();

  return {
    props: { data: JSON.parse(JSON.stringify(userData)) },
  };
}

export default function SSRPage({ data }: { data: any[] }) {
  return (
    <div>
      <h1>SSR Page</h1>
      <DataDisplay data={data} />
    </div>
  );
}
