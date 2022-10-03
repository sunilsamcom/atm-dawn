/* eslint-disable no-case-declarations */

import { NextApiRequest, NextApiResponse } from 'next';
// import { CampaignManagementService } from '@app/services/voluum/campaign';
import { getSession } from 'next-auth/react';
import { campaignsData } from '../../../data/campaignsData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  // const campaignService: CampaignManagementService = new CampaignManagementService();

  const { id } = req.query;
  console.log(req.method, "req===>");

  const session = await getSession({ req });

  // Performing this to be able to access the token without a session. Just a work around
  const token = req.headers['authorization'];
  console.log(token, "token===>");

  switch (req.method) {
  case 'POST':
    try {
      // const updateOfferResponse = await campaignService.getCampaign(token);
      const campaign = req.body
      const newCampaignsData = {
        id: Date.now(),
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
      campaignsData.push(newCampaignsData)
      res.status(200).json(newCampaignsData);
    } catch (error) {
      res.status(error.response.status).json({ error });
    }
    break;
  case 'GET':
    try {
      //   const params = {
      //     from: "2022-09-23T00:00:00Z",
      //     groupBy: "campaign",
      //     ...req.query
      //   }
      //   console.log(req.query,params,"req.body,params");

      // const getCampaignResponse = await campaignService.getCampaign(token,params);
      res.status(200).json(campaignsData);
    } catch (error) {
      res.status(error?.response?.status ?? 500).json({ error });
    }
    break;
  default:
    console.log('Method not allowed');
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
