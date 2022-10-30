import _ from 'lodash';
import { useRouter } from 'next/router';

import TeamSummary from 'components/feature/summary/Team';
import TEAMS from 'resources/db/teams';

export default function TeamPage() {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== 'string') {
    return <div />;
  }

  const TEAM = _.find(TEAMS, { teamId: id });

  return <div className='px-1'>{TEAM && <TeamSummary key={TEAM.teamId} {...TEAM} />}</div>;
}
