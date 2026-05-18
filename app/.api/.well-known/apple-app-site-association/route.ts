import { NextResponse } from 'next/server';

export async function GET() {
  const appleAppSiteAssociation = {
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "RZ4LN5Z25F.com.astra.affordables",
        "paths": [
          "/product/*",
          "/category/*",
          "/favorites",
          "/orders",
          "*"
        ]
      }
    ]
  }
}

  return NextResponse.json(appleAppSiteAssociation, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
