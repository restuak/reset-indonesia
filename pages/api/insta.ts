// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const username = "mantapfunny"; 
//   try {
//     const response = await fetch(
//       `https://www.instagram.com/${username}/?__a=1&__d=dis`
//     );

//     if (!response.ok) {
//       return res.status(response.status).json({ error: "Failed to fetch IG" });
//     }

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Server error fetching IG" });
//   }
// }
