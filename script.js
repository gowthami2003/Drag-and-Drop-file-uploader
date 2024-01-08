window.onload = function () {
    document.getElementById('file').addEventListener('change', getFileName);
}
const getFileName = (event) => {
    const files = event.target.files;
    const fileName = files[0].name;
    document.getElementById('message').innerHTML = fileName;
    console.log("file name: ", fileName);
}