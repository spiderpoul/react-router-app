import { matchPath } from "react-router-dom";
import { coursesMocks } from "../mocks/coursesMocks";

const REQUEST_TIMEOUT = 3000;

const mockRequest = (data) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), REQUEST_TIMEOUT * Math.random())
  );
};

const mockData = [
  ["/courses", () => coursesMocks],
  ["/courses/:id", ({ id }) => coursesMocks[id]],
];

export const mockFetch = (requestUrl) => {
  const [matchedUrl, getMocks] =
    mockData.find(([url]) => Boolean(matchPath(url, requestUrl))) || [];

  if (!getMocks) {
    return { error: 404, message: "Requested data not found" };
  }

  const { params } = matchPath(matchedUrl, requestUrl);

  return mockRequest(getMocks(params));
};

window.mockFetch = mockFetch;
