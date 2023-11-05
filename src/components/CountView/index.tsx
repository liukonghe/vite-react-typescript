import { useState } from 'react';
import styles from './index.module.scss';

function CountView() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={styles.card}>
      <button type="button" onClick={() => setCount((newCount) => newCount + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default CountView;
