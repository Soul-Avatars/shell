import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.THIRDWEB_AUTH_DOMAIN || "",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),

  authOptions: {
    tokenDurationInSeconds: 60 * 60 * 24 * 7, // 1 week
    refreshIntervalInSeconds: 60 * 60 * 24, // 24 hour
  },
});

export default ThirdwebAuthHandler();
