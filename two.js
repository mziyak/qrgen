function generateQRCode() {
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';

    // Get URL input
    const url = document.getElementById('urlInput').value;
    
    if (url) {
        // Generate QR code
        new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        });
    } else {
        alert('Please enter a URL');
    }
}

function downloadQRCode(format) {
    const canvas = document.querySelector('#qrcode canvas');
    if (!canvas) {
        alert('Please generate a QR code first!');
        return;
    }

    // Create a link element for download
    const link = document.createElement('a');
    link.href = canvas.toDataURL(`image/${format}`);
    link.download = `qrcode.${format}`;

    // Simulate a click event to trigger the download
    link.click();
}
