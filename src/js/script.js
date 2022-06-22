function cpyLatin() {
    var copyText = document.getElementById("LatinText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("la").innerHTML = "Copied to clipboard: " + copyText.value;
}

function cpySun() {
    var copyText = document.getElementById("SundaText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("su").innerHTML = "Copied to clipboard: " + copyText.value;
}