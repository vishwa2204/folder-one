const folderData = {
    id: "1",
    name: "Evaluation",
    isFolder: true,
    item: [
        {
            id: 2,
            name: "Documents",
            isFolder: true,
            item: ["Document1.jpg", "Document2.jpg", "Document3.jpg"],
        },
        {
            id: 3,
            name: "Desktop",
            isFolder: true,
            item: ["Screenshot1.jpg", "videopal.mp4"],
        },
        {
            id: 4,
            name: "Downloads",
            isFolder: true,
            item: [
                {
                    id: 5,
                    name: "Drivers",
                    isFolder: true,
                    item: ["Printerdriver.dmg", "cameradriver.dmg"],
                }
            ],
        },
        {
            id: 6,
            name: "Applications",
            isFolder: true,
            item: ["Webstorm.dmg", "Pycharm.dmg", "FileZila.dmg", "Mattermost.dmg"],
        },
        {
            id: 7,
            isFolder: false,
            name: "chromedriver.dmg",
        }
    ]
}

export default folderData;

