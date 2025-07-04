import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const challenge = args[0];

if (!challenge) {
  console.error("❌ กรุณาระบุชื่อโจทย์ เช่น: npm test 1.shipping");
  process.exit(1);
}

const testDir = path.join("src", challenge);

if (!fs.existsSync(testDir)) {
  console.error(`❌ ไม่พบโฟลเดอร์: ${testDir}`);
  process.exit(1);
}

spawn("npx", ["jest", testDir, "--passWithNoTests"], {
  stdio: "inherit",
  shell: true,
});
