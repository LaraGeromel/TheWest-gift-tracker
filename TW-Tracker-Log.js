/**
 * The West - Gift Log Scraper
 * Extracts "Gift from/to a friend" logs and exports them to CSV.
 * Compatible with all seasonal events (Valentine's, Easter, Christmas, etc.)
 */
async function extractAndDownloadLogs() {
    let allLogs = [];
    let hasNextPage = true;

    console.log("Starting extraction... Please wait until the process finishes.");

    while (hasNextPage) {
        // Select all log rows in the current view
        const rows = document.querySelectorAll('.tw2gui_scrollpane_clipper_contentpane .row');
        
        rows.forEach(row => {
            const description = row.querySelector('.cell_2')?.innerText.trim() || "";
            
            // Universal filter for gift-related logs
            if (description.includes("Gift from a friend:") || description.includes("Gift to a friend:")) {
                allLogs.push({
                    date: row.querySelector('.cell_0')?.innerText.trim(),
                    value: row.querySelector('.cell_1')?.innerText.trim(),
                    description: description.replace(/;/g, ",") // Formatting for CSV safety
                });
            }
        });

        // Pagination handling
        const btnNext = document.querySelector('.nextPage');
        if (btnNext && getComputedStyle(btnNext).display !== 'none') {
            btnNext.click();
            // Wait for AJAX content to load
        const randomDelay = Math.floor(Math.random() * (2000 - 1200 + 1) + 1200);
            await new Promise(resolve => setTimeout(resolve, randomDelay));
        } else {
            hasNextPage = false;
        }
    }

    if (allLogs.length === 0) {
        console.warn("No gift logs found in this tab.");
        return;
    }

    // CSV Generation (using semicolon for Excel compatibility)
    const header = "Date;Value;Description\n";
    const body = allLogs.map(log => `${log.date};${log.value};${log.description}`).join("\n");
    const csvContent = "\uFEFF" + header + body; 

    // Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.setAttribute("href", url);
    link.setAttribute("download", "the_west_gift_logs.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`Success! ${allLogs.length} records extracted.`);
}


extractAndDownloadLogs();
