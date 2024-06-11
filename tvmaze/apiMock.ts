import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { tHTTPMethods } from "./types";

/** Mock request */
function mock(method: tHTTPMethods,
              path: string,
              data: any,
              status: number = 200): void  {
  mockServer.use(
    http[method](path, () =>
      HttpResponse.json(data, { status: status }),
    ));
}

const mockServer = setupServer();

export { mock, mockServer };
