import TransferCard from 'components/feature/card/Transfer';

import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <TransferCard />

      <button
        className={`
          w-12
          h-12
          rounded-full
          justify-center items-center
          flex right-4 bottom-4
          fixed
          bg-primary
        `}
        onClick={() => window.scrollTo(0, 0)}
        type='button'
      >
        <span className='material-icons white'>north</span>
      </button>
    </div>
  );
}
