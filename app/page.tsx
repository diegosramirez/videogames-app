import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Videogame CRUD Application</h1>
      <p>Manage your videogame collection with ease!</p>
      <Link href="/videogames" className="btn btn-primary">
        View Videogames
      </Link>
    </div>
  );
}