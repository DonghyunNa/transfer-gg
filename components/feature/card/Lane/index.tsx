import Image from 'next/image';

function LaneCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className='flex flex-col justify-center mr-4'>
      <Image className='w-12 h-12' width={20} height={20} src={icon} alt='asd' />
      <div className='w-12 text-center font-light'>{label}</div>
    </div>
  );
}

export default LaneCard;
