// Cloudflare Pages Function to proxy API requests and handle CORS
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // Extract the API path from the URL
  const apiPath = url.pathname.replace('/api/', '');
  
  // Target API server
  const targetUrl = `http://117.72.82.170:10272/api/${apiPath}${url.search}`;
  
  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  
  try {
    // Forward the request to the target API
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Forward other headers if needed
        ...(request.headers.get('Authorization') && {
          'Authorization': request.headers.get('Authorization')
        }),
      },
      body: request.method !== 'GET' ? await request.text() : undefined,
    });
    
    // Get the response data
    const data = await response.text();
    
    // Return response with CORS headers
    return new Response(data, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
      },
    });
    
  } catch (error) {
    console.error('API Proxy Error:', error);
    
    return new Response(JSON.stringify({
      error: 'API请求失败',
      message: error instanceof Error ? error.message : '未知错误',
      timestamp: new Date().toISOString(),
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
      },
    });
  }
}
