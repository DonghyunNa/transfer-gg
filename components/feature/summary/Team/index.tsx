/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import { Typography } from '@material-tailwind/react';
import PersonCard from 'components/feature/card/Person';
import PLAYERS from 'resources/db/players';
import { Player, Team } from 'types';
import LaneCard from 'components/feature/card/Lane';
import DynamicImage from 'components/common/dynamic-image/Team';

function TeamSummary({
  teamNameKorean,
  teamNameShort,
  teamId,
  teamName,
  firstColor,
  secondColor,
}: Team) {
  const players = _.filter(PLAYERS, { team: teamNameShort });

  return (
    // eslint-disable-next-line max-len
    <div
      id={teamId}
      className='w-full my-4 border-solid	border-gray-400	border-2'
      style={{ borderColor: firstColor, background: '#E2E4F2' }}
    >
      <Header
        teamName={teamName}
        teamId={teamNameShort}
        firstColor={firstColor}
        secondColor={secondColor}
      />
      <Body players={players} />
    </div>
  );
}

function Header({
  teamName,
  teamId,
  firstColor,
  secondColor,
}: {
  teamName: string;
  teamId: string;
  firstColor: string;
  secondColor: string;
}) {
  return (
    <div className='flex flex-row items-center py-4 px-4'>
      <DynamicImage className='w-12 h-12 mr-2' alt={teamName} src={teamId} />

      <Typography
        variant='h4'
        className='font-extrabold'
        style={{
          // color: firstColor,
          color: secondColor === '#ffffff' || secondColor === '#000000' ? firstColor : secondColor,
          // backgroundColor: firstColor,
        }}
      >
        {teamName}
      </Typography>
    </div>
  );
}

function Body({ players }: { players: Player[] }) {
  const Top = _.filter(players, { lane: 'TOP' });
  const Jun = _.filter(players, { lane: 'JUN' });
  const Mid = _.filter(players, { lane: 'MID' });
  const Bot = _.filter(players, { lane: 'BOT' });
  const Sup = _.filter(players, { lane: 'SUP' });
  const lanes: { icon: string; laneLabel: string; playersByLabel: Player[] }[] = [
    { icon: '/lane/top.png', laneLabel: 'TOP', playersByLabel: Top },
    { icon: '/lane/jun.png', laneLabel: 'JGL', playersByLabel: Jun },
    { icon: '/lane/mid.png', laneLabel: 'MID', playersByLabel: Mid },
    { icon: '/lane/bot.png', laneLabel: 'BOT', playersByLabel: Bot },
    { icon: '/lane/sup.png', laneLabel: 'SUP', playersByLabel: Sup },
  ];

  return (
    <div className='bg-white px-4'>
      {lanes.map(({ icon, laneLabel, playersByLabel }) => (
        <Laners key={laneLabel} icon={icon} laneLabel={laneLabel} players={playersByLabel} />
      ))}
    </div>
  );
}

function Laners({
  icon,
  laneLabel,
  players,
}: {
  icon: string;
  laneLabel: string;
  players: Player[];
}) {
  return (
    <div className='flex flex-row py-3 items-start'>
      <LaneCard icon={icon} label={laneLabel} />

      <div className='flex flex-1 overflow-visible flex-wrap align-stretch'>
        {players.map((player) => (
          <PersonCard {...player} key={player.playerId} />
        ))}
      </div>
    </div>
  );
}

export default TeamSummary;
