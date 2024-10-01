export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const success = true; // You can change this to false to simulate a failed API call
      if (success) {
        resolve("API response data");
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000); // Simulating a delay of 1 second
  });
}
