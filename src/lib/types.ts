export interface CampaignMetadata {
  pid?: string;
  email?: string;
  adTitle?: string;
  budget?: string | number;
  description?: string;
  target?: string;
  adCopy?: string;
  creativeUrls?: string[];
  adCallToAction?: string;
  buttonText?: string;
  isActive?: boolean;
  receiptId?: string;
  currency?: string;
  isFlat?: boolean;
  usageFee?: string | number;
  startDate?: string;
}

export interface PromoApiCampaignStatsSample {
  updatedTime?: string;
  updated_time?: string;
  spend?: number | string | null;
  reach?: number | string | null;
  views?: number | string | null;
  clicks?: number | string | null;
  cpc?: number | string | null;
  ctr?: number | string | null;
  cpm?: number | string | null;
  cpv?: number | string | null;
}

export interface PromoApiCampaignStatsData {
  totals?: PromoApiCampaignStatsSample[];
  google?: PromoApiCampaignStatsSample[];
  meta?: PromoApiCampaignStatsSample[];
}

export interface CampaignStatsData {
  id: number | undefined;
  name: CampaignMetrics;
  stat: string;

  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  change: string | number;
  changeType: string;
  chartData: {
    labels: (string | null)[];
    data: (string | number | null)[];
  };
}

export interface CampaignData extends CampaignMetadata {
  stats?: CampaignStatsData[];
  data?: PromoApiCampaignStatsData;
}
