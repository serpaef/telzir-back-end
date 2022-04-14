import IRates from '../../interfaces/IRates';

export const rates: IRates[] = [
  { id: 1, origin: '011', destination: '016', pricePerMinute: 1.9 },
  { id: 2, origin: '011', destination: '017', pricePerMinute: 1.7 },
  { id: 3, origin: '011', destination: '018', pricePerMinute: 0.9 },
  { id: 4, origin: '016', destination: '011', pricePerMinute: 2.9 },
  { id: 5, origin: '017', destination: '011', pricePerMinute: 2.7 },
  { id: 6, origin: '018', destination: '011', pricePerMinute: 1.9 },
];
