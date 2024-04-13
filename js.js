document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    document.getElementById("cards").onmousemove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            // Exclude links from the mouse event listener
            const links = card.getElementsByTagName("a");
            for (const link of links) {
                link.style.setProperty("--mouse-x", "");
                link.style.setProperty("--mouse-y", "");
            }
        }
    };
});