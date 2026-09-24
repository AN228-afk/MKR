import sharp from "sharp";

const source = "../../attached_assets/MKR_PHOTO_1780926061320.jpeg";

// Crop to just the icon mark (top portion, excluding "SAFETY SOLUTIONS" text below)
const cropBox = { left: 80, top: 270, width: 1100, height: 440 };

async function run() {
  const cropped = sharp(source).extract(cropBox);

  // Standard favicon sizes
  await cropped.clone().resize(64, 64, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } }).png().toFile("public/favicon.png");
  await cropped.clone().resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } }).png().toFile("public/apple-touch-icon.png");
  await cropped.clone().resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } }).png().toFile("public/icon-512.png");

  console.log("Favicon files generated successfully");
}

run().catch(console.error);
