import { registerUser, loginUser } from "./authenticationService";
import gqlClient from "../../apollo.client";

const client = gqlClient();

describe("registerUser", () => {
  it("should registerUser", () =>
    registerUser(client, { username: "toto", password: "toto", confirmedPassword: "toto" }).then(
      res => {
        expect(res.ok);
        expect(res.username).toBe("toto");
      }
    ));

  it("should loginUser", () =>
    loginUser(client, { username: "toto", password: "toto" }).then(res => {
      expect(res.ok);
      expect(res.token).toBe("token");
    }));
});
