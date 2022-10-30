export type Player = {
  playerId: string;
  name: string;
  team: string;
  lane: string;
  signedAt?: string;
  expiredAt?: string;
};

export type Team = {
  teamName: string;
  teamNameKorean: string;
  teamNameShort: string;
  teamId: string;
  firstColor: string;
  secondColor: string;
};

export type Transfer = {
  playerId: string;
  name: string;
  before: string;
  beforeLeague?: string;
  after: string;
  lane: string;
  refreshedAt: string;
};
