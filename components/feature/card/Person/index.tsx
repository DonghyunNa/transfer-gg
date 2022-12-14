import DynamicImage from 'components/common/dynamic-image/Player';
import { Player } from 'types';

function PersonCard({ playerId, name }: Player) {
  return (
    <div className='h-18 text-center mb-2' style={{ minWidth: 80 }}>
      <DynamicImage
        className='w-12 h-12 object-cover bg-white border-2 border-solid border-primary-200 mx-auto'
        quality={100}
        placeholder='blur'
        // eslint-disable-next-line max-len
        blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8duxZPQAIPwMTLbcDiAAAAABJRU5ErkJggg=='
        src={playerId}
        alt={name}
      />

      <div className='font-light'>{playerId}</div>
    </div>
  );
}

export default PersonCard;
