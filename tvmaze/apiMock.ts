import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

/** Mock request */
function mock(method: (
  "all" | "head" | "get" | "post" | "put" | "patch" | "delete" | "options"),
              path: string,
              data: Record<string, any>,
              status: number = 200): void  {
  mockServer.use(
    http[method](path, () =>
      HttpResponse.json(data, { status: status }),
    ));
}

const mockServer = setupServer();

export { mock, mockServer };
