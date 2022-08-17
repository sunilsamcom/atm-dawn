import { Profile } from "next-auth";

export class AuthData {
  constructor(
    protected username: string,
    protected password: string,
    protected mfa?: string
  ) {

  }
  toJSON() {
    return {
      email: this.username,
      password: this.password,
      mfaCode: this.mfa,
    }
  }
}
export class VoluumUser /*implements User*/ {
  public get authToken() {
    return this._authToken;
  }
  public get profile() {
    return this._profile;
  }
  public get id():string {
    return this._id;
  }
  constructor(
    protected _authToken: any,
    protected _profile: Profile,
    protected _id?: string
  ) {
     
  }
}
//export 
function VoluumHandleError(errorData) {
  console.log(errorData);
  //errorData.error.messsages.forEach(console.log);
  console.log(errorData.error.messsages);

}
async function VoluumAnonApiPost(fetchImplementation: any, endpoint: string, data: object) {
  let requestBody = JSON.stringify(data);
  let httpResponse = await fetchImplementation(endpoint, {
    method: 'POST',
    body: requestBody,
    headers: { "Content-Type": "application/json" }
  });
  let response = await httpResponse.json();

  return response;
}


export async function VoluumAuthApiGet(fetchImplementation: any, endpoint: string, token: string) {
  if (token) {
    let url = new URL(endpoint);
    //console.log("URL OBJECT",url);
    endpoint = url.href
  }
  let httpResponse = await fetchImplementation(endpoint, {
    "method": "GET",
    "headers": {
      "cwauth-token": token
    }
  });
  try {
    return await httpResponse.json();
  } catch(e) {
      console.log(e);
      return false;
  }
  
}


export class Login {
  public constructor(
    protected fetchImplementation: any,
    protected sessionEndpoint: string = process.env.VOLUUM_ENDPOINT_SESSION || "https://api.voluum.com/auth/session",
    protected profileEndpoint: string = process.env.VOLUUM_ENDPOINT_PROFILE || "https://api.voluum.com/profile",
  ) {
    this.fetchImplementation = fetchImplementation || fetch;
    this.sessionEndpoint = sessionEndpoint;
    this.profileEndpoint = profileEndpoint;
    return this;

  }
  public async login(credentials): Promise<VoluumUser> {

    const authData = await VoluumAnonApiPost(this.fetchImplementation, this.sessionEndpoint, credentials);
    if (!authData.token || authData.error) {
      console.log("User login fail");
      VoluumHandleError(authData);
      throw new Error("Invalid user login");
    }

    const userProfileData = await VoluumAuthApiGet(this.fetchImplementation, this.profileEndpoint, authData.token);
   
    if (userProfileData.error) {
      console.log("Get profile error", userProfileData); 
      VoluumHandleError(userProfileData);
      throw new Error("Can't get user profile");
    }
    let user = new VoluumUser(authData, userProfileData,userProfileData.id);
    return user;
  }
}


export default Login

