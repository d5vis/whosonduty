import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const getSheetData = async (building: string) => {
  if (building === "PNHDOH") building = "PNH/DOH";
  const auth = new google.auth.GoogleAuth({
    projectId: process.env.PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `${building}!B14:D210`,
  });
  const values = response.data.values;
  if (!values) return ["No RAs on Duty"];
  const date = new Date().toLocaleDateString("en-US");
  const ras = values.find((row: string[]) => row.includes(date));
  if (!ras) return ["No RAs on Duty"];
  return ras.slice(1);
};

export async function POST(req: NextRequest) {
  const { building } = await req.json();
  const ras = await getSheetData(building);
  return NextResponse.json({ onDuty: ras });
}
