import { load } from 'cheerio';

export const parse = (data: string) => {
  const $ = load(data);
  const crawledRealtimeKeywords = $(
    '.ah_roll_area.PM_CL_realtimeKeyword_rolling ul > li span.ah_k',
  );
  const keywords: string[] = $(crawledRealtimeKeywords)
    .map(
      (i, ele): string => {
        return $(ele).text();
      },
    )
    .get();
  return keywords;
};
