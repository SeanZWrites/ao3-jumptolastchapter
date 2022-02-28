// ==UserScript==
// @name         Ao3 Jump To Last
// @version      1
// @grant        none
// @match        https://archiveofourown.org/*
// @author       SeanZ
// @description  Add link to jump to last chapter in Ao3 Fic
// ==/UserScript==

function getLastChapterUrl() {
    let lastChapter = document.querySelector("#chapter_index option:last-child")?.value;
    return (lastChapter) ? window.location.toString().replace(/(\/works\/\d+)\/.*/, "$1/chapters/" + lastChapter) : null;
}

function addLastChapterLink() {
    let lastChapterUrl = getLastChapterUrl()
    if (!lastChapterUrl) return; // don't do anything if there's only one chapter

    let chapterNumberText = document.querySelector(".stats dd.chapters")
    let chapterItems = chapterNumberText.textContent.split("/")

    chapterNumberText.innerHTML = `<a href="${lastChapterUrl}">${chapterItems[0]}</a>/${chapterItems[1]}`
}

addLastChapterLink();