import { Configuration, TeamsApi } from "../src";

describe("api", () => {
  it("instantiates", () => {
    const config = new Configuration({});
    const client = new TeamsApi(config);
  });
});
