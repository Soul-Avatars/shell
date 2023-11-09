import { prettyObject } from "@/app/utils/format";
import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";

let lastFetchTime = new Date().getTime();
let lastFetchData: any = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Get the user off the request
    const user = await getUser(req);

    // Check if the user is authenticated
    if (!user) {
      return res.status(401).json({
        message: "Not authorized.",
      });
    }

    if (
      lastFetchData &&
      lastFetchTime + 1000 * 60 * 10 > new Date().getTime()
    ) {
      console.log("[NFT Route] return cached data");
      return res.status(200).json(lastFetchData);
    }

    const { chain, address, contract_address } = req.query;
    let fetchUrl = `https://api.nftport.xyz/v0/accounts/${address}?chain=${chain}&page_size=50&include=metadata`;
    if (contract_address) {
      fetchUrl += `&contract_address=${contract_address}`;
    }
    console.log("[NFT Route] fetch data from NFTPort");
    const nfts = await fetch(fetchUrl, {
      headers: {
        Authorization: process.env.NFTPORT_API_KEY || "",
      },
    });
    lastFetchData = await nfts.json();
    lastFetchTime = new Date().getTime();
    return res.status(200).json(lastFetchData);
  } catch (e) {
    console.error("[NFT Query] ", e);
    return res.status(501).json(prettyObject(e));
  }
}
