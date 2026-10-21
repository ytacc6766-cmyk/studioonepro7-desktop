// build 6a6fb120ea
// (auto) 703ec2
import { useState } from 'react';
export default function useCounter(init = 0) {
  const [n, setN] = useState(init);
  return { n, inc: () => setN((x) => x + 1), dec: () => setN((x) => x - 1) };
}
