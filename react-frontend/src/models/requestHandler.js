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
};
