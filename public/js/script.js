const files = [
    {
        id: 1,
        name: "Example App",
        version: "1.0.0",
        size: "15 MB",
        description: "Sample application for demonstration",
        downloads: 1450,
        file: "/downloads/example.apk",
        screenshot: "/images/preview.jpg"
    }
    // Add more files
];

function showPreview(fileId) {
    const file = files.find(f => f.id === fileId);
    const modal = document.getElementById('previewModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${file.name}</h2>
        <img src="${file.screenshot}" alt="Preview" style="max-width: 100%;">
        <p>${file.description}</p>
        <p>Version: ${file.version}</p>
        <p>Size: ${file.size}</p>
        <button onclick="startDownload('${file.file}')">Download</button>
        <div class="security-warning">
            ⚠️ Warning: APK files can contain malicious code. Only download from trusted sources.
        </div>
    `;
    
    modal.style.display = "block";
}

function startDownload(filePath) {
    // Track download (you'd need backend integration)
    window.location.href = filePath;
}

// Close modal
window.onclick = function(event) {
    const modal = document.getElementById('previewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
