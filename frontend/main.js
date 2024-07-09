document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const tiktokUrlInput = document.getElementById('tiktok-url');
    const resultContainer = document.getElementById('result-container');
    const reportForm = document.getElementById('report-form');
    const reportMethodSelect = document.getElementById('report-method');
    const processContainer = document.getElementById('process-container');
    const processLog = document.getElementById('process-log');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const url = tiktokUrlInput.value.trim();
        if (url) {
            try {
                const response = await fetch('http://localhost:3000/search', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url })
                });

                const data = await response.json();
                if (data.success) {
                    document.getElementById('search-result').innerHTML = `
                        <h2>Hasil Pencarian</h2>
                        <p><strong>Username:</strong> ${data.username}</p>
                        <p><strong>URL:</strong> ${data.url}</p>
                        <img src="${data.avatar}" alt="${data.username}" class="avatar">
                    `;

                    resultContainer.classList.remove('hidden');
                    reportForm.classList.remove('hidden');
                } else {
                    alert('Akun TikTok tidak ditemukan atau terjadi kesalahan.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat melakukan pencarian.');
            }
        }
    });

    reportForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const method = reportMethodSelect.value;

        if (method) {
            resultContainer.classList.add('hidden');
            processContainer.classList.remove('hidden');

            const response = await fetch('http://localhost:3000/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: tiktokUrlInput.value, method })
            });

            const data = await response.json();
            if (data.success) {
                let logIndex = 0;
                const intervalId = setInterval(() => {
                    if (logIndex < data.logs.length) {
                        processLog.textContent += `\n${data.logs[logIndex]}`;
                        logIndex++;
                    } else {
                        clearInterval(intervalId);
                    }
                }, 1000);

                processLog.textContent += '\n\nProses report selesai!';
            } else {
                processLog.textContent = 'Terjadi kesalahan saat melakukan report.';
            }
        }
    });
});
