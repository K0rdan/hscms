import AdminPanel from '@/components/AdminPanel';
import LoginButton from '@/components/LoginButton';
import { auth } from '@/lib/auth';

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div>
        <h1>Admin Panel</h1>
        <p>You must be logged in to view this page.</p>
        <LoginButton />
      </div>
    );
  }

  return <AdminPanel />;
}
