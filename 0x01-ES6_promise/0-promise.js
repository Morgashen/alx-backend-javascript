export default function getResponseFromAPI() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        message: "Success",
        status: 200,
      };
      resolve(data);
    }, 2000);
  });
}
