// backend/api.js
const express = require('express');
const fetch = require('node-fetch');
const { generateFakeAccounts, reportTikTokAccount } = require('./utils');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Route untuk pencarian akun TikTok
app.post('/search', async (req, res) => {
    const { url } = req.body;
    const username = url.split('/').pop();
    const tiktokApiUrl = `https://www.tiktok.com/@${username}`;

    try {
        const response = await fetch(tiktokApiUrl);
        if (response.ok) {
            const html = await response.text();
            const userMatch = html.match(/"uniqueId":"(.*?)"/);
            const avatarMatch = html.match(/"avatarLarger":"(.*?)"/);

            if (userMatch && avatarMatch) {
                const data = {
                    username: userMatch[1],
                    url: tiktokApiUrl,
                    avatar: avatarMatch[1]
                };
                res.json({ success: true, ...data });
            } else {
                res.json({ success: false });
            }
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false });
    }
});

// Route untuk proses report
app.post('/report', async (req, res) => {
    const { url, method } = req.body;
    const username = url.split('/').pop();
    const fakeAccounts = generateFakeAccounts(20); // Generate 20 fake accounts

    let logs = [];

    try {
        if (method === 'mass_report' || method === 'spam_report') {
            for (const account of fakeAccounts) {
                const reportSuccess = await reportTikTokAccount(username, account, method);
                if (reportSuccess) {
                    logs.push(`Akun ${account} berhasil melakukan report.`);
                } else {
                    logs.push(`Akun ${account} gagal melakukan report.`);
                }
                await new Promise(resolve => setTimeout(resolve, 2000)); // Delay 2 detik
            }
        }

        res.json({ success: true, logs });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
