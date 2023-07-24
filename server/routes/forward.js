import axios from 'axios';
import qs from 'qs';

const BASE_FORWARD_API = process.env.API_URL || 'http://localhost:3000';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = getQuery(event);
  const params = getParams(event);

  let url = BASE_FORWARD_API + event.request.url;

  // Replace params in url
  Object.keys(params).forEach((key) => {
    url = url.replace(new RegExp(`[${key}]`), params[key]);
  });

  try {
    const response = await axios.request({
      url: url + '?' + qs.stringify(query),
      method: event.request.method,
      data: body,
      headers: {
        cookie: event.request.headers.cookie,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    throw createError(error?.response?.status || 500, error?.response?.data);
  }
});
