import { Metadata } from 'next';
import TicketsContent from './TicketsContent';

export const metadata: Metadata = {
  title: 'Tickets | BSidesFW 2025',
  description: 'Get your tickets for BSidesFW 2025',
};

export default function TicketsPage() {
  return <TicketsContent />;
} 