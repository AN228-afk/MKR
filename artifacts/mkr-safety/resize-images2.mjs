import sharp from "sharp";

const jobs = [
  { in: "../../attached_assets/MKR_4_1780926061320.webp", out: "../../attached_assets/MKR_4_card_1780926061320.webp", width: 700 },
  { in: "../../attached_assets/MKR_2_1780926061320.webp", out: "../../attached_assets/MKR_2_card_1780926061320.webp", width: 700 },
  { in: "../../attached_assets/MKR_5_1780926061320.webp", out: "../../attached_assets/MKR_5_card_1780926061320.webp", width: 700 },
];

for (const job of jobs) {
  try {
    const info = await sharp(job.in)
      .resize({ width: job.width })
      .webp({ quality: 78 })
      .toFile(job.out);
    console.log(`Done: ${job.out} (${(info.size / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.error(`Failed: ${job.in}`, err.message);
  }
}
