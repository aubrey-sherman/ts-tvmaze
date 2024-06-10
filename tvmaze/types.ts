/** type of Object that holds show information */
type tShowInfo = {
  id: number,
  name: string,
  summary: string,
  image: string,
};

/** Type of Object that holds score and show information. */
type tShowInfoAndScore = {
  score: number,
  show: tShowInfo & {image: {medium: string, original: string} | undefined },
};

/** Type of Object that holds information about a show's episode. */
type tEpisodeInfo = {
  id: number,
  name: string,
  season: number,
  number: number
}

export type {
  tShowInfo,
  tShowInfoAndScore,
  tEpisodeInfo
};