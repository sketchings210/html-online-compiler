function openAndCopyTextFile(div) {
    // Get the text content of the span element inside the clicked div
    let fileContent = div.querySelector('span').innerText.trim();

    // Copy the content to the clipboard
    copyToClipboard(fileContent);
}

function copyToClipboard(text) {
    // Create a textarea element to hold the text
    let textarea = document.createElement("textarea");
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
}
