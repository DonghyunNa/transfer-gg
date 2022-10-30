/* eslint-disable max-len */
import _ from 'lodash';
import { Typography } from '@material-tailwind/react';
import DynamicLaneImage from 'components/common/dynamic-image/Lane';
import DynamicPlayerImage from 'components/common/dynamic-image/Player';
import DynamicTeamImage from 'components/common/dynamic-image/Team';

import TRANSFERS from 'resources/db/transfer';
import TEAMS from 'resources/db/teams';

function TransferCard() {
  return (
    <div className='mx-2 my-2 border-2 border-solid border-primary'>
      <Typography
        className='text-center font-bold text-primary text-2xl sm:text-3xl my-4'
        textGradient
      >
        최신 이적 현황
      </Typography>

      {TRANSFERS.map((transfer) => {
        const isTeamDataFound = !!_.find(TEAMS, { teamId: transfer.beforeShort.toLowerCase() });
        const isCLTeam = transfer.beforeShort.includes('(CL)');

        return (
          <div key={transfer.playerId} className='w-full my-4  flex items-center justify-center'>
            <DynamicLaneImage
              className='w-9 h-9 mx-1'
              lane={transfer.lane.toLowerCase()}
              alt={transfer.lane}
            />
            <div className='h-16 text-center mb-2' style={{ minWidth: 80 }}>
              <DynamicPlayerImage
                className='w-12 h-12 object-cover bg-white border-2 border-solid border-primary-200 mx-auto'
                quality={100}
                placeholder='blur'
                blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8duxZPQAIPwMTLbcDiAAAAABJRU5ErkJggg=='
                src={transfer.playerId}
                alt={transfer.name}
              />

              <div className='font-light'>{transfer.playerId}</div>
            </div>

            {isTeamDataFound || isCLTeam ? (
              <DynamicTeamImage
                src={transfer.beforeShort}
                className='w-12 h-12 mx-1'
                alt={transfer.lane}
              />
            ) : (
              <DynamicTeamImage
                src={transfer.beforeLeague}
                className='w-12 h-12 mx-1'
                alt={transfer.lane}
              />
            )}

            <div className='h-16 mx-1 flex justify-center items-center'>
              <span className='material-icons'>arrow_forward</span>
            </div>

            <DynamicTeamImage src={transfer.after} className='w-12 h-12 mx-1' alt={transfer.lane} />
          </div>
        );
      })}
    </div>
  );
}

export default TransferCard;
