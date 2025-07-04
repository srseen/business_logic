# Business Logic Playground

โปรเจ็กต์นี้ใช้สำหรับฝึกเขียนและทดสอบ Business Logic เป็น TypeScript  
รองรับการรันทีละโจทย์และรันทดสอบแบบแยกตามโจทย์ได้ง่าย ๆ

## โครงสร้างโปรเจ็กต์

business-logic/<br>
├── src/<br>
│ └── 1.shipping/<br>
│ ├── index.ts # โค้ดโจทย์<br>
│ └── index.test.ts # เทสโจทย์<br>
├── main.ts # รันโจทย์<br>
├── run-test.ts # รันทดสอบ<br>
├── package.json<br>
├── tsconfig.json<br>
├── jest.config.ts<br>
└── README.md<br>

## ติดตั้ง dependencies

```bash
npm install
```

---

## วิธีรันแต่ละโจทย์

```
npm start <โจทย์>
```

จะรันไฟล์ src/1.shipping/index.ts

```
npx jest <โจทย์>
```

จะรันไฟล์ src/1.shipping/index.test.ts

---

### ตัวอย่าง

- run โจทย์ shipping

```
npm start 1.shipping
```

- run test shipping

```
npx jest 1.shipping
```
