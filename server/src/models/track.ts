export type TrackModel = {
  id: string;
  title: string;
  /**
   * the id of the Author of a track
   */
  authorId: string;
  thumbnail: string;
  length?: number;
  duration: number;
  modulesCount: number;
  description: string;
  numberOfViews: number;
};
