import sharp from "sharp";

const jobs = [
  // Service-card-sized images (displayed ~662px wide max)
  { in: "../../attached_assets/MKR_4_1780926061320.png", out: "../../attached_assets/MKR_4_card_1780926061320.webp", width: 700 },
  { in: "../../attached_assets/MKR_2_1780926061320.png", out: "../../attached_assets/MKR_2_card_1780926061320.webp", width: 700 },
  { in: "../../attached_assets/MKR_5_1780926061320.png", out: "../../attached_assets/MKR_5_card_1780926061320.webp", width: 700 },
  // Small header logo (displayed at 70x70)
  { in: "../../attached_assets/MKR_PHOTO_1780926061320.jpeg", out: "../../attached_assets/MKR_PHOTO_small_1780926061320.jpeg", width: 140 },
];

for (const job of jobs) {
  try {
    const info = await sharp(job.in)
      .resize({ width: job.width })
      .webp(job.out.endsWith(".webp") ? { quality: 80 } : undefined)
      .jpeg(job.out.endsWith(".jpeg") ? { quality: 85 } : undefined)
      .toFile(job.out);
    console.log(`Done: ${job.out} (${(info.size / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.error(`Failed: ${job.in}`, err.message);
  }
}
