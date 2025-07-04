import { spawn } from "child_process";
import path from "path";
import fs from "fs";

const args = process.argv.slice(2);
const challenge = args[0];

if (!challenge) {
  console.error("❌ กรุณาระบุชื่อโจทย์ เช่น: npm start 1.shipping");
  process.exit(1);
}

const filePath = path.join("src", challenge, "index.ts");

if (!fs.existsSync(filePath)) {
  console.error(`❌ ไม่พบไฟล์: ${filePath}`);
  process.exit(1);
}

spawn("node", ["--loader", "ts-node/esm", filePath], {
  stdio: "inherit",
  shell: true,
});
