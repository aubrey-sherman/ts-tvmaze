/** type of Object that holds show information */
type tShowInfo = {
  id: number,
  name: string,
  summary: string,
  image: string,
};

/** Type of Object that holds score and show information.
 * Data coming from the API of TV Maze
*/
type tShowInfoAndScore = {
  score: number,
  show: tShowInfo & {
    image: { medium: string, original: string; } |
    undefined;
  },
};

/** Type of Object that holds information about a show's episode. */
type tEpisodeInfo = {
  id: number,
  name: string,
  season: number,
  number: number;
};

/** Valid HTTP methods */
type tHTTPMethods =
  "all" |
  "head" |
  "get" |
  "post" |
  "put" |
  "patch" |
  "delete" |
  "options";

export type {
  tShowInfo,
  tShowInfoAndScore,
  tEpisodeInfo,
  tHTTPMethods,
};