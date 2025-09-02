// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const response = await fetch("https://rakyatmenuntut.net/", {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
//           "(KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
//         Accept: "text/html,application/xhtml+xml",
//       },
//     });

//     if (!response.ok) {
//       return res
//         .status(response.status)
//         .send(`Gagal mengambil halaman: ${response.statusText}`);
//     }

//     const html = await response.text();

//     res.setHeader("Content-Type", "text/html");
//     res.status(200).send(html);
//   } catch (error: any) {
//     console.error("Error fetching web:", error);
//     res
//       .status(500)
//       .send(
//         "Terjadi kesalahan saat mengambil halaman. Silakan coba lagi nanti."
//       );
//   }
// }
