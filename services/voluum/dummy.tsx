// import { Profile } from "next-auth";
import { AuthData, VoluumUser } from "./login";


export class Dummy {
  public constructor() {


  }
  public async login(credentials: AuthData): Promise<VoluumUser> {
    let authData =
    {
      token: "NzYhFtdIGniLpOj8o-2OChNGOtsyMjKQ",
      expirationTimestamp: "2022-08-11T03:22:21.564Z",
      inaugural: false,
    };
    let userProfileData = {
      id: "5840a3de-83ff-402a-bfac-836c506b27b8",
      created: "2022-04-11T17:26:25.000Z",
      state: "ACTIVATED",
      role: "ROLE_USER",
      email: "david@rise.io",
      firstName: "David ",
      lastName: "Santos",
      memberships: [
        {
          role: "ADMIN",
          client: {
            id: "751454a4-f7d5-4feb-9756-0603a55993fd",
            created: "2021-07-14T12:09:52.000Z",
            name: "Yabby & Yabby SGPS LDA",
            referrerToken: "u1CcWlhDHZFbt6XnNoLPjt/FwdheTXscGmQs0Q8m6u+CvypXOIdxNkvRlyGVzAzA",
            features: [
              "AFFILIATE_TRACKING",
            ],
            signUpPlan: "ANNUAL06_VIP_7DD_TA_300K_3AU_250M_15000.00$_6",
            initialPlan: "ANNUAL06_VIP_7DD_TA_300K_3AU_250M_15000.00$_6",
          },
          restrictedColumns: [
          ],
        },
      ],
      defaultClientId: "751454a4-f7d5-4feb-9756-0603a55993fd",
      timezone: "America/New_York",
      passwordSet: true,
      mfaActive: false,
      emailChangeInProgress: false,
      currency: "USD",
    }

    let user = new VoluumUser(authData, userProfileData);
    return user;
  }
}


export default Dummy

