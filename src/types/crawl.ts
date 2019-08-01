export interface CrawlRequestResponse {
  data: string;
  status: number;
}

export type Request = () => Promise<CrawlRequestResponse>;
export type Parse = (data: string) => any;
