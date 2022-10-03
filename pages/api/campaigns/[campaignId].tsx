import { NextApiRequest, NextApiResponse } from 'next';
import { campaignsData } from '../../../data/campaignsData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { campaignId }: any = req.query
  
  switch (req.method) {
  case 'GET':
    try {
      const campaigns = campaignsData.filter(x => x.id === parseInt(campaignId))
      res.status(200).json(campaigns)
    } catch (error) {
      res.status(error.response.status).json({ error });
    }
    break;
  case 'PUT':
    try {
      const campaign = req.body
      const newCampaignsData = {
        id:campaignId,
        campaignName: campaign.campaignName,
        campaignNotes: campaign.campaignNotes,
        actions: campaign.actions,
        status: campaign.status,
        externalStatus: campaign.externalStatus,
        campaignWorkspaceName: campaign.campaignWorkspaceName,
        clicks: campaign.clicks,
        mtti: campaign.mtti,
        visits: campaign.visits
  
      }
      //   const updateOfferResponse = await campaignService.getCampaign(token);
      const updateCampaign = campaignsData.filter(x => x.id === parseInt(campaignId))
      const updateCampaignIndex = updateCampaign.findIndex(res => res.id === parseInt(campaignId))
      campaignsData.splice(updateCampaignIndex, 1,newCampaignsData)
      res.status(200).json(newCampaignsData);
    } catch (error) {
      res.status(error.response.status).json({ error });
    }
    break;
  case 'DELETE':
    try {
      const delteCampaign = campaignsData.filter(x => x.id === parseInt(campaignId))
      const delteCampaignIndex = delteCampaign.findIndex(res => res.id === parseInt(campaignId))
      campaignsData.splice(delteCampaignIndex, 1)
      res.status(200).json(delteCampaign)
    } catch (error) {
      res.status(error.response.status).json({ error });
    }
  }
}