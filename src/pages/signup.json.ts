export async function post({ request, redirect }) {
  const body = await request.json();

  const postBody = {
    email: body.email,
    utm_source: "website",
    referring_site: "speakargentinianspanish.com",
    // TODO@jsjoeio - refactor CTA to allow us to pass in
    // then make these required
    // utm_campaign: blog_post_footer, etc. (we could get more specific too)
  };
  const url =
    "https://api.beehiiv.com/v2/publications/pub_6fcf5bfc-5793-49e6-b6b2-abcf322a6fd7/subscriptions";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.BEEHIIV_API_TOKEN}`,
    },
    body: JSON.stringify(postBody),
  };

  try {
    const response = await fetch(url, options);

    return {
      body: JSON.stringify({
        success: response.status === 200 || response.status === 201,
      }),
    };
  } catch (error) {
    return {
      body: JSON.stringify({
        success: false,
      }),
    };
  }
}
