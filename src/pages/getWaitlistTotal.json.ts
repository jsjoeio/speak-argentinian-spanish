export async function get({ params, request }) {
  const url =
    "https://api.beehiiv.com/v2/publications/pub_6fcf5bfc-5793-49e6-b6b2-abcf322a6fd7/subscriptions?status=active&tier=all&limit=1";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.BEEHIIV_API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      body: JSON.stringify({
        totalCount: data.total_results,
      }),
    };
  } catch (error) {
    console.error(error);
  }
}
