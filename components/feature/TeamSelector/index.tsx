import Link from 'next/link';
import TEAMS from 'resources/db/teams';
import DynamicImage from 'components/common/dynamic-image/Team';

function TeamSelector() {
  return (
    <div className='w-full'>
      {TEAMS.map((team) => (
        <Link key={team.teamId} href={`/team/${team.teamId}`} style={{ width: '9%' }}>
          <DynamicImage
            src={team.teamId}
            alt={team.teamName}
            className='inline'
            style={{ width: '8%', margin: '0.5%' }}
          />
        </Link>
      ))}
    </div>
  );
}

export default TeamSelector;
