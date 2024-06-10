/** type of Object that holds show information */
type tShowInfo = {
  id: number,
  name: string,
  summary: string,
  image: string,
};

type tShowInfoAndScore = {
  score: number,
  show: tShowInfo & {image: {medium: string, original: string} | undefined },
};

export type {
  tShowInfo,
  tShowInfoAndScore,
};