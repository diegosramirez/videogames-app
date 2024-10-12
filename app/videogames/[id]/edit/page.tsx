import { Videogame } from '@/types/videogame';

export async function generateStaticParams() {
  // In a real application, this would fetch all videogame IDs from an API
  return [{ id: '1' }];
}

export default function EditVideogame({ params }: { params: { id: string } }) {
  // ... (rest of the component code remains the same)
}