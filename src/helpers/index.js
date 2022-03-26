export const getDay = (date) => {
    return new Date(date).getDate();
}

export const saveFile = (url,typeFile) => {
    fetch(url).then((response) => {
        return response.blob();
    }).then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${Date.now()}.${typeFile}`);
        document.body.appendChild(link);
        link.click();
    });
}