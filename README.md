--# TheWest-gift-tracker
Resume: A browser-based automation script to extract, filter, and export heart gift logs from The West to CSV for friend activity analysis.--

# The West - Gift Log Scraper

A lightweight JavaScript automation script designed to extract gift logs (sent and received) from **The West** game interface. It exports the data into a clean, Excel-ready CSV file for player activity analysis.

## 🚀 Features

- **Event Universal**: Works for any event that uses the "Gift from/to a friend" log system (Valentine's, Independence Day, Christmas, Easter, etc.).
- **Automated Pagination**: Automatically cycles through all log pages.
- **Data Integrity**: Uses UTF-8 BOM and semicolon separators for perfect rendering in Microsoft Excel and Google Sheets.
- **Zero Dependencies**: Pure JavaScript to be used directly in the browser console.

## 📋 How to Use

1. Open **The West** and open the specific Event Log window (e.g., Heart Log, Currency Log).
2. Press `F12` (or `Ctrl+Shift+I`) to open the **Developer Tools**.
3. Go to the **Console** tab.
4. Copy and paste the code from `script.js` and press `Enter`.
5. The script will automatically flip through pages and download `the_west_gift_logs.csv` once finished.

## 💡 Pro Tip: Friend Activity Audit

Use this tool to manage your friend list and identify inactive players:

1. **The Action**: Send gifts to your entire friend list.
2. **The Data**: Wait a few hours and run this script to export the logs.
3. **The Analysis**: Upload the CSV to an AI (like Gemini or ChatGPT) with the following prompt:
   > *"I am providing a CSV file of game logs. Please compare the names in 'Gift to a friend' with the names in 'Gift from a friend'. List the users who received a gift from me but did not send one back so I can audit my friend list."*

### 🛠️ Customization

If your internet connection is slow and pages aren't loading fast enough, increase the timeout value in the script:

```javascript
await new Promise(resolve => setTimeout(resolve, 2000)); // Set to 2000ms (2 seconds)
```

⚠️ Disclaimer
This script is for educational purposes only. Use it responsibly and according to the game's Terms of Service.

### 📥 Download
[![Download Script](https://img.shields.io/badge/Download-Script.js-blue?style=for-the-badge&logo=javascript)](https://github.com/LaraGeromel/TheWest-gift-tracker/releases/download/v1.0.0/TW-Tracker-Log.js)
