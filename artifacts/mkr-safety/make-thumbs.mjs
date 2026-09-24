import sharp from "sharp";

const jobs = [
  { in: "../../attached_assets/MKR_1_of_child_1780926061320.webp", out: "../../attached_assets/MKR_1_of_child_thumb_1780926061320.webp" },
  { in: "../../attached_assets/MKR_2_1780926061320.webp", out: "../../attached_assets/MKR_2_thumb_1780926061320.webp" },
  { in: "../../attached_assets/MKR_4_1780926061320.webp", out: "../../attached_assets/MKR_4_thumb_1780926061320.webp" },
  { in: "../../attached_assets/MKR_5_1780926061320.webp", out: "../../attached_assets/MKR_5_thumb_1780926061320.webp" },
];

for (const job of jobs) {
  const info = await sharp(job.in).resize({ width: 400 }).webp({ quality: 78 }).toFile(job.out);
  console.log(`Done: ${job.out} (${(info.size / 1024).toFixed(0)} KB)`);
}
