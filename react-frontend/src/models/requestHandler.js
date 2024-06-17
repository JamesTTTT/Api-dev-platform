const BASE_URL = import.meta.env.VITE_RESTAPI_URL || "http://localhost:8080";

export const requestHandler = {
  request: async (request) => {
    try {
      const response = await fetch(`${BASE_URL}/api/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: request.url,
          method: request.method,
          headers: request.headers,
          body: request.body,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const contentType = response.headers.get("Content-Type");

      if (contentType) {
        switch (true) {
          case contentType.includes("application/json"):
            return await response.json();
          case contentType.includes("text/html"):
            return await response.text();
          case contentType.includes("text/plain"):
            return await response.text();
          case contentType.includes("application/xml"):
          case contentType.includes("text/xml"):
            return await response.text();
          case contentType.includes("application/octet-stream"):
            return await response.blob();
          default:
            return await response.text();
        }
      }

      return await response.text();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  directRequest: async (request) => {
    let responseData;
    let response;
    try {
      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body ? request.body : undefined,
      });

      const contentType = response.headers.get("Content-Type");

      if (contentType) {
        switch (true) {
          case contentType.includes("application/json"):
            responseData = await response.json();
            break;
          case contentType.includes("text/html"):
          case contentType.includes("text/plain"):
          case contentType.includes("application/xml"):
          case contentType.includes("text/xml"):
            responseData = await response.text();
            break;
          case contentType.includes("application/octet-stream"):
            responseData = await response.blob();
            break;
          default:
            responseData = await response.text();
            break;
        }
      } else {
        responseData = await response.text();
      }
      console.log(response.text());
      return {
        requestDetails: {
          url: request.url,
          method: request.method,
          headers: request.headers,
          body: request.body,
        },
        responseDetails: {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          data: responseData,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        requestDetails: {
          url: request.url,
          method: request.method,
          headers: request.headers,
          body: request.body,
        },
        responseDetails: {
          status: response ? response.status : null,
          statusText: response ? response.statusText : null,
          headers: response
            ? Object.fromEntries(response.headers.entries())
            : null,
          data: responseData,
        },
        error: {
          message: error.message,
          status: error.response ? error.response.status : 500,
        },
      };
    }
  },
};
